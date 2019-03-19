import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {IPizza} from './app.types';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private afs: AngularFirestore) {}

  getAllPizzas() {
      return this.afs.collection<IPizza>('allpizzas').snapshotChanges();
  }

  getPizza(id: string) {
      return this.afs
          .collection('allpizzas')
          .doc(id)
          .valueChanges();
  }

  getAlergens() {
      return this.afs
          .collection('alergens')
          .valueChanges();
  }

  deletePizza(id: string) {
      this.afs.collection('allpizzas').doc(id).delete();
  }
}
