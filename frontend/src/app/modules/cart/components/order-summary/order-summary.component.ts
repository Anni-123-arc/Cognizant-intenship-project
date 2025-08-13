import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-cart-summary',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {
  @Input() totalItems: number = 0;
  @Input() subtotal: number = 0;
  @Input() discount: number = 0;
  @Input() totalAmount: number = 0;

  constructor(private router: Router) {}

  navigateToCheckout() {
    this.router.navigate(['/checkout']);
  }
}