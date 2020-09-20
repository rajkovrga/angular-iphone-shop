import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './ components/products/products.component';
import {OneProductComponent} from './ components/one-product/one-product.component';
import {CartComponent} from './ components/cart/cart.component';
import {NotFoundComponent} from './ components/not-found/not-found.component';
import {BuyFormComponent} from './ components/buy-form/buy-form.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'products/:id',
    component: OneProductComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'buy',
    component: BuyFormComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
