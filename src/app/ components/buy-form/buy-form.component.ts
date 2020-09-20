import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import get = Reflect.get;

@Component({
  selector: 'app-buy-form',
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.css']
})
export class BuyFormComponent implements OnInit {
  totalPrice: any;
  submitted = false;
  formGroup: FormGroup;
  constructor(private cartService: CartService,
              private router: Router,
              private fb: FormBuilder) { }
  ngOnInit(): void {
    if (this.cartService.numberItemsToCart() <= 0) {
      this.router.navigate(['/not-found']);
    }

    this.totalPrice = this.cartService.totalPrice();

    this.formGroup = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15)]),
      address: new FormControl('', [
        Validators.required,
        Validators.pattern('^([A-ZŠĐĐŽČĆ][a-zšđžčć]{2,14})(([\\s][A-ZŠĐĐŽČĆ][a-zšđžčć]{2,14})|([\\s][a-zšđžčć]{3,15})){0,5}[\\s]((([1-9]|[1-9][0-9]|[1-9][0-9][0-9])([\\\\/]([0-9]|[1-9][0-9]|[1-9][0-9][0-9])){0,1})|([0-9][A-Za-z]|[1-9][0-9][A-Za-z])|[B][B])$'),
        Validators.minLength(10),
        Validators.maxLength(50)]),
      email: new FormControl('', [
        Validators.required,
        Validators.email]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(500)]),
    });

  }
  get email(): any { return this.formGroup.get('email'); }
  get firstName(): any { return this.formGroup.get('firstName'); }
  get lastName(): any { return this.formGroup.get('lastName'); }
  get description(): any { return this.formGroup.get('description'); }
  get address(): any { return this.formGroup.get('address'); }
  onSubmit(): any  {
    this.submitted = true;
    if (!this.formGroup.invalid) {
      return;
    }
    this.cartService.removeAllItems();
    this.router.navigate(['/products']);
    alert('Uspešno kupljeno');
  }

}
