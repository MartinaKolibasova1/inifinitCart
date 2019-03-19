import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CartPage } from './cart.page';
import {ListPage} from '../list/list.page';
import {HeaderModule} from '../header/header.module';

@NgModule({
  imports: [
    HeaderModule,
    CommonModule,
    FormsModule,
    IonicModule,
      RouterModule.forChild([
          {
              path: '',
              component: CartPage
          }
      ])
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
