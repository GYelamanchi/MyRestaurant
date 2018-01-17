import { Component, OnInit } from '@angular/core';
import {Order} from '../order';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders:Order[];

  constructor(private orderService:OrderService) { }

  ngOnInit() {
    this.getOrders()
  }
  getOrders():void{
    this.orderService.getOrders().subscribe(orders=>this.orders=orders)
  }
}
