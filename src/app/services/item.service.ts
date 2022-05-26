import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

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

  constructor() { }

  getItem(){
    return this.items;
  }

  addItem(item:Item){
    this.items.unshift(item);
  }
}
