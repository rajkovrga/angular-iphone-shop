import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product';
import {Subscription} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('openSearch', [
      state('open', style({
        opacity: 1
      })),
      state('close', style({
        opacity: 0
      })),
      transition('open <=> close',
        [
          animate('0.6s')
        ])
    ]),
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(400)
      ]),
      transition('* => void', [
        animate(400, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  sortValue: any = '';
  searchText: any = '';
  subscription: Subscription;
  showSearch = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.subscription = this.productService.getProducts()
      .subscribe((products) => {
        this.products = products;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  sortProducts(sortValue: string): void {
    switch (sortValue)
    {
      case 'asc':
        this.sortValue = sortValue;
        break;
      case 'desc':
        this.sortValue = sortValue;
        break;
    }
  }
  searchToggle(): void
  {
    this.showSearch = !this.showSearch;
  }
}
