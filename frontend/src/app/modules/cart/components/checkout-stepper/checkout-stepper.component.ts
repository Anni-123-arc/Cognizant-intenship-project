import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AddressSelectorComponent } from '../address-selector/address-selector.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-stepper',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
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
        cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
        expiry: ['', Validators.required],
        cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
      })
    });
  }

  // Rest of the component methods remain the same
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
}