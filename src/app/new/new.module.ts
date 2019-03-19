import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewPage } from './new.page';
import {HeaderModule} from '../header/header.module';

const routes: Routes = [
  {
    path: '',
    component: NewPage
  }
];

@NgModule({
  imports: [
      HeaderModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewPage]
})
export class NewPageModule {}
