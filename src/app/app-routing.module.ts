import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'allpizzas',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'allpizzas/new',
    loadChildren: './new/new.module#NewPageModule'
  },
  { path: 'new', loadChildren: './new/new.module#NewPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'allpizzas/:id', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'allpizzas/:id/edit', loadChildren: './new/new.module#NewPageModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
