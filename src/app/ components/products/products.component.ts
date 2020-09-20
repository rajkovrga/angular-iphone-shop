import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  sortValue: any = '';
  searchText: any = '';
  subscription: Subscription;
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
}
