import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from './order';
import {Item} from './item';

@Injectable()
export class OrderService {

  constructor(private http:HttpClient) { }
  private itemsUrl = 'http://localhost:8080/items';
  private orderUrl = 'http://localhost:8080/order';

  public saveOrder(order: Order): void {
    alert(order);
    alert(this.http.get<Item[]>(this.itemsUrl));
    this.http.post(this.orderUrl, order,{responseType:"text"}).subscribe(data=>{
      console.log(data);
    });
  }
}
