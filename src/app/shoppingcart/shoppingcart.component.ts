import { Component, OnInit } from '@angular/core';
import {CartItem} from '../cartitem';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  cartItems: CartItem[];

  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.getCart();
  }

  private getCart():void{
    this.cartItems = this.cartService.getShoppingCart().getCartItems();
  }

}
