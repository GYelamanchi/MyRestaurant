import {ShoppingCart} from './shoppingcart';
import {Injectable} from '@angular/core';

@Injectable()
export class CartService{
  private shoppingCart: ShoppingCart;

  constructor(){
    this.shoppingCart = new ShoppingCart();
  }

  getShoppingCart():ShoppingCart{
    return this.shoppingCart;
  }

}

