import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import {ItemService} from './item.service';
import {CartService} from './cart.service';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';




@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    /*HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )*/
  ],
  declarations: [
    AppComponent,
    ItemsComponent,
    ShoppingcartComponent,
    HomeComponent,
    OrderComponent
  ],
  providers: [CartService,ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
