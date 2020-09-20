import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  numberItems: any;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.numberItems = this.cartService.numberItemsToCart();
    this.cartService.subject.subscribe((x) => {
      this.numberItems = this.cartService.numberItemsToCart();
    });
  }

}
