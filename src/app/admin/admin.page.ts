import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../pizza.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  pizzas = [];
  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.pizzaService.getAllPizzas().subscribe((pizzas) => {
          this.pizzas = pizzas.map((p) => {
            return {
                id: p.payload.doc.id,
                ...p.payload.doc.data()
            };
          });
    });
  }

  onDeletePizza(id: string) {
    this.pizzaService.deletePizza(id);
  }
}
