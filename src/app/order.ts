
import {CartItem} from './cartitem';

export class Order{
  orderId: string;
  items: CartItem[];
  date: Date;
  total: number;

  constructor(){

  }
}
