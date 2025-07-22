import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {
  @Input() totalItems: number = 0;
  @Input() subtotal: number = 0;
  @Input() discount: number = 0;
  @Input() totalAmount: number = 0;
}