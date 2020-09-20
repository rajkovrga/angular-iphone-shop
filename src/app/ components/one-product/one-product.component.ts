import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {
  product: Product;
  subscription: Subscription;
  id: any;
  constructor(private productService: ProductService,
              private cartService: CartService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
    });
  }

  ngOnInit(): void {
    this.subscription = this.productService.getProducts()
      .subscribe((p) => {
        this.product = p.filter(x => x.id == this.id)[0];
        if (this.product === undefined)
        {
          this.router.navigate(['not-found']);
        }
      });
  }
  addToChart(item: any): void {
    if (this.cartService.numberItemsToCart() >= 10)
    {
      alert('Ne možete imati više od 10 proizvoda u korpi');
      return;
    }
    this.cartService.addToCart(item);
    alert('Dodat proizvod u korpu');
  }
}
