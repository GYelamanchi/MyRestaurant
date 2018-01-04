import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import {ItemService} from './item.service';




@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    /*HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )*/
  ],
  declarations: [
    AppComponent,
    ItemsComponent
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
