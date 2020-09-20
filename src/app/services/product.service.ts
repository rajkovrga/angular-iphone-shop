import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: any;
  constructor(private http: HttpClient) { }

  getProducts(): any {
    return this.http.get(environment.url)
      .pipe((products) => {
        return products;
      });
  }

}
