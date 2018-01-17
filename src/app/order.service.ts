import {Injectable, SystemJsNgModuleLoader} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from './order';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  private orderUrl = 'http://localhost:8080/order';
  private ordersUrl = 'http://localhost:8080/order/orders';


  public saveOrder(order: Order): Observable<String> {
    return this.http.post(this.orderUrl, order, {responseType: "text"});
  }

  public getOrders():Observable<Order[]> {
  return this.http.get<Order[]>(this.ordersUrl);
  }
}
