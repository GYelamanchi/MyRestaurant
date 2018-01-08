import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingcartComponent} from './shoppingcart/shoppingcart.component';

const routes:Routes=[
  { path: 'shoppingcart', component:ShoppingcartComponent  }
]



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
