import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any;
  totalPrice: any;
  constructor(private cartService: CartService,
              private router: Router) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.totalPrice = this.cartService.totalPrice();
    this.cartService.subject.subscribe((x) => {
      this.items = this.cartService.getItems();
      this.totalPrice = this.cartService.totalPrice();
    });
  }
  removeItem(index: number): void
  {
    this.cartService.removeItemToCart(index);
  }
  onIncrement(index: number): void
  {
    if (this.cartService.numberItemsToCart() >= 10)
    {
      alert('Ne možete imati više od 10 proizvoda u korpi');
      return;
    }
    this.cartService.changeNumber(index, '+');
  }
  onDecrement(index: number): void
  {
    this.cartService.changeNumber(index, '-');
  }
  buy(): void {
    if (this.cartService.numberItemsToCart() <= 0) {
      alert('Nemate ništa u korpi');
      return;
    }
    this.router.navigate(['/buy']);
  }
}
