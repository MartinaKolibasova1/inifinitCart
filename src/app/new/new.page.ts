import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {IPizza} from '../app.types';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  form: FormGroup;
  private itemsCollection: AngularFirestoreCollection<IPizza>;
  pizzas: Observable<IPizza[]>;
  alergens = [];

  pizza = {};
  editMode = false;
  id = '';

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
      this.itemsCollection = this.afs.collection<IPizza>('allpizzas');
      this.pizzas = this.itemsCollection.valueChanges();

      this.route.paramMap.subscribe((params: Params) => {
        this.id = params.params['id'];

        if (this.id) {
          this.editMode = true;
          this._loadPizza();
        } else {
          this._initForm();
        }
      });

      this.afs.collection('alergens').snapshotChanges()
        .subscribe((alergens) => {
          this.alergens = alergens.map(
            a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, ...data };
            }
          );
        });
  }
  onAddPizza() {
    if (this.editMode) {
      this.itemsCollection.doc(this.id).update(this.form.value).then((res) => {
        this.router.navigate(['/allpizzas', this.id]);
      });
    } else {
      this.itemsCollection.add(this.form.value).then((done) => {
        if (done) {
          this.form.reset();
          this.router.navigate(['/allpizzas']);
        }
      });
    }
  }

  onAddIngredient() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.form.get('ingredients')).push(control);
  }

  _initForm() {
    console.log(this.pizza);
    if (!this.editMode) {
      this.form = new FormGroup({
        name: new FormControl(null, Validators.required),
        price: new FormControl(null, Validators.required),
        alergens: new FormControl([]),
        ingredients: new FormArray([])
      });
    } else {
      this.form = new FormGroup({
        name: new FormControl(this.pizza['name'], Validators.required),
        price: new FormControl(this.pizza['price'], Validators.required),
        alergens: new FormControl(this.pizza['alergens']),
        ingredients: new FormArray(this._createIngredientsArray())
      });
    }
  }

  _loadPizza() {
    this.afs.collection('allpizzas').doc(this.id).valueChanges()
      .subscribe((pizza) => {
        this.pizza = pizza;
        this._initForm();
      });
  }

  _createIngredientsArray() {
    return this.pizza['ingredients'].map((ingredient) => {
      return new FormControl(ingredient, Validators.required);
    });
  }
}
