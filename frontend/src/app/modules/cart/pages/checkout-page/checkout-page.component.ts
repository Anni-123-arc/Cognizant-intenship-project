// checkout-page.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
// import { OrderSummaryComponent } from '../../components/order-summary/order-summary.component';
import { CheckoutStepperComponent } from '../../components/checkout-stepper/checkout-stepper.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    NavbarComponent ,
    FooterComponent,
    // OrderSummaryComponent,
    CheckoutStepperComponent
  ],
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent {
  // Add your checkout logic here
}