import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {PizzaService} from '../pizza.service';
import {CartService} from '../cart.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id: string;
  constructor(
      private afs: AngularFirestore,
      private route: ActivatedRoute,
      private pizzaService: PizzaService,
      private cartService: CartService,
      private auth: AuthService,
  ) {}
  alergens = [];
  pizza = {};
  filteredAlergens = [];

  ngOnInit() {
    this.route.paramMap.subscribe((parameters) => {
      this.id = parameters['params']['id'];
    });
    this.pizzaService.getPizza(this.id).subscribe((pizza) => {
        this.pizza = pizza;
        this.inac();
    });

  }

  inac() {
      this.pizzaService.getAlergens().subscribe((alergens) => {
          this.alergens = alergens;
          this.filteredAlergens = this.getAlergens();
          console.log(this.filteredAlergens);
      });
  }

  getAlergens() {
      const alergenMap = this.alergens.reduce((acc, item) => {
          acc[item.alergen_num] = item.name;
          return acc;
      }, {});

      console.log(alergenMap);
      return this.pizza['alergens'].map((item) => {
          return {
              id: item,
              name: alergenMap[item],
          };
      });
  }

  onDeletePizza() {
    this.pizzaService.deletePizza(this.id);
  }
}
