import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingcartComponent} from './shoppingcart/shoppingcart.component';
import {ItemsComponent} from './items/items.component';
import {HomeComponent} from './home/home.component';
import {OrderComponent} from './order/order.component';
import {OrdersComponent} from './orders/orders.component';

const routes:Routes=[
  { path: 'shoppingcart', component:ShoppingcartComponent  },
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component:ItemsComponent  },
  { path: 'home', component:HomeComponent  },
  { path: 'order', component:OrderComponent  },
  { path: 'orders', component:OrdersComponent  }

]



@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]

})
export class AppRoutingModule { }
