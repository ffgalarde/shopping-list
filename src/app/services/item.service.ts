import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url:string ='http://localhost:3000/products';
  items:Item[] = [
      {
      id: 0,
      title:'manzana',
      price:1,
      quantity:1,
      completed:false
      },
      {
      id: 1,
      title:'pan',
      price:1,
      quantity:1,
      completed:true
      },
      {
      id: 2,
      title:'chamarra',
      price:1,
      quantity:1,
      completed:false
      }
    ];

  constructor(private http:HttpClient) { }

  getItem():Observable<Item[]>{
    //return this.items;
    return this.http.get<Item[]>(this.url);
  }

  addItem(item:Item){
    this.items.unshift(item);
  }
}
