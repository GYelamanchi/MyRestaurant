import { Component, OnInit } from '@angular/core';
import {Order} from '../order';
import {CartService} from '../cart.service';
import {CartItem} from '../cartitem';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order:Order;
  constructor(private cartService:CartService) {
  }

  ngOnInit() {
    this.order=new Order();
    this.order.items=this.cartService.getShoppingCart().getCartItems();
    this.order.date=new Date();
    this.order.total=this.getTotal();
  }
  private getTotal():number{
    var cartItems = this.cartService.getShoppingCart().getCartItems();
    var total:number=0;
    cartItems.forEach(cartItem=>{
      total+=cartItem.item.price*cartItem.qty;
    })
    if(total) {
      return total;
    }
  }

}
