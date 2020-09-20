import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './ components/products/products.component';
import { OneProductComponent } from './ components/one-product/one-product.component';
import { CartComponent } from './ components/cart/cart.component';
import { BuyFormComponent } from './ components/buy-form/buy-form.component';
import { NotFoundComponent } from './ components/not-found/not-found.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SortPipe } from './pipes/sort.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OneProductComponent,
    CartComponent,
    BuyFormComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
