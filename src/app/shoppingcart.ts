import {CartItem} from './cartitem';
import {Item} from './item';
import {forEach} from '@angular/router/src/utils/collection';

export class ShoppingCart{
  private cartItems: CartItem[];

  constructor() {
    this.cartItems =[];
  }

  addToCart(item: Item):void{
    if(!this.IncrementQtyIfItemExists(item.id)) {
      var cartItem: CartItem;
      cartItem = new CartItem();
      cartItem.item = item;
      cartItem.qty = 1;
      this.cartItems.push(cartItem);
    }
  }

  private IncrementQtyIfItemExists(itemId : String):boolean{
    var itemExists: boolean;
    itemExists = false;
    this.cartItems.forEach(function(cartItem){
      if(cartItem.item.id==itemId) {
        cartItem.qty++;
        itemExists= true;
      }
    })
    return itemExists;
  }
  public getCartItems():CartItem[]{
    return this.cartItems;
  }
}
