import { Injectable } from '@angular/core';
import {Item} from './item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }
  private itemsUrl = 'api/items';

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl);
  }
}
