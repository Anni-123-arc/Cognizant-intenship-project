import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AddressSelectorComponent } from '../address-selector/address-selector.component';
import { Router } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-checkout-stepper',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    AddressSelectorComponent
  ],
  templateUrl: './checkout-stepper.component.html',
  styleUrls: ['./checkout-stepper.component.css']
})
export class CheckoutStepperComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  
  checkoutForm: FormGroup;
  selectedAddressId?: number;
  orderConfirmed = false;

  constructor() {
    this.checkoutForm = this.fb.group({
      address: [null, Validators.required],
      payment: this.fb.group({
        method: ['credit_card', Validators.required],
        nameOnCard: ['', Validators.required],
        cardNumber: ['', [Validators.required,Validators.pattern(/^[\d\s]{16,19}$/)]],
        expiry: ['', [Validators.required,Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{2}|[0-9]{4})$/) ]], // expiry validator
        cvv: ['', [Validators.required,Validators.pattern(/^\d{3}$/)]] // CVV validator:
      })
    });
  }

  onAddressSelected(address: any) {
    console.log('Received address:', address);
    this.selectedAddressId = address.id;
    this.checkoutForm.get('address')?.setValue(address);
  }

  submitOrder() {
    if (this.checkoutForm.valid) {
      this.orderConfirmed = true;
      setTimeout(() => {
        this.router.navigate(['/order-confirmation']);
      }, 2000);
    }
  }

  get paymentForm() {
    return this.checkoutForm.get('payment') as FormGroup;
  }

  debugForm() {
  console.log('Form validity:', this.paymentForm.valid);
  console.log('Form errors:', this.paymentForm.errors);
  Object.keys(this.paymentForm.controls).forEach(key => {
    console.log(`${key} validity:`, this.paymentForm.get(key)?.valid);
    console.log(`${key} errors:`, this.paymentForm.get(key)?.errors);
  });
  }
}