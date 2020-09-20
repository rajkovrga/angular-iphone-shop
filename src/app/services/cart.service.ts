import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  subject = new Subject();
  items: any = [];
  constructor() {
    if (localStorage.getItem('cart') != null){
      this.items = JSON.parse(localStorage.getItem('cart'));
    }
  }
  numberItemsToCart(): any
  {
    // tslint:disable-next-line:variable-name
    let number: any = 0;
    this.items.forEach(x => {
      number += x.quantity;
    });
    return number;
  }

  addToCart(item: Product): any {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === item.id) {
        this.items[i].quantity++;
        localStorage.setItem('cart', JSON.stringify(this.items));
        return this.subject.next(this.items);
      }
    }
    const newItem: any = {...item, quantity: 1};
    this.items.push(newItem);
    localStorage.setItem('cart', JSON.stringify(this.items));
    return this.subject.next(this.items);
  }
  totalPrice(): void
  {
    // tslint:disable-next-line:variable-name
    let price: any = 0;
    this.items.forEach(x => {
      price += x.quantity * x.price;
    });
    return price;
  }
  removeAllItems(): any
  {
    this.items = [];
    localStorage.removeItem('cart');
    return this.subject.next(this.items);
  }
  getItems(): any
  {
    return this.items;
  }
  changeNumber(index: number, type: string = '-'): any {
    let number: number;
    switch (type)
    {
      case '+':
        number = ++this.items[index].quantity;
        break;
      case '-':
        number = --this.items[index].quantity;
        break;
    }
    if (number === 0)
    {
      this.items.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.items));
      return this.subject.next(this.items);
    }
    localStorage.setItem('cart', JSON.stringify(this.items));
    return this.subject.next(this.items);
  }
  removeItemToCart(index: number): any
  {
    this.items.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.items));
    return this.subject.next(this.items);
  }
}
