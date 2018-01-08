import { Component, OnInit } from '@angular/core';
import {Item} from '../item';
import {ItemService} from '../item.service';
import { Observable } from 'rxjs/Observable';
import {CartService} from '../cart.service';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemService, private cartService:CartService) {
  }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);

  }
  addItemToCart(item:Item):void{
    this.cartService.getShoppingCart().addToCart(item);
    console.log(this.cartService.getShoppingCart());


  }
}
