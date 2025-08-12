import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../../core/services/orderdata.service';
@Component({
  selector: 'app-track-order',
  imports: [CommonModule],
  templateUrl: './track-order.html',
  styleUrl: './track-order.css'
})
export class TrackOrder implements OnInit {
  orderId!: string;
  order: any = null;
  orderSteps: { status: string; date: string }[] = [];
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('id') || '';
    this.loadOrder();
  }

  loadOrder() {
    this.order = this.orderService.getOrderById(this.orderId);

    if (!this.order) {
      this.error = 'Order not found.';
      return;
    }

    this.buildTrackingSteps();
  }

  buildTrackingSteps() {
    const steps: { status: string; date: string }[] = [];

    // Placed date always present
    if (this.order.placedDate) {
      steps.push({ status: 'Order Placed', date: this.order.placedDate });
    }

    // Add shipped step only if status >= shipped
    if (['Shipped', 'Delivered', 'Returned', 'Cancelled'].includes(this.order.status)) {
      steps.push({ status: 'Shipped', date: this.order.placedDate }); // If shipped date not separately stored, fallback to placedDate
    }

    // You can extend with actual shipped date if you have one.

    // Delivered step if applicable
    if (['Delivered', 'Returned'].includes(this.order.status) && this.order.deliveredDate) {
      steps.push({ status: 'Delivered', date: this.order.deliveredDate });
    }

    // Returned steps if status is Returned
    if (this.order.status === 'Returned') {
      // You can add actual return initiation date or placeholders
      steps.push({ status: 'Return Initiated', date: this.order.deliveredDate }); // Example
      steps.push({ status: 'Returned', date: this.order.deliveredDate }); // Example
    }

    // Cancelled step if status is Cancelled
    if (this.order.status === 'Cancelled') {
      steps.push({ status: 'Cancelled', date: this.order.placedDate }); // Replace with actual cancel date if available
    }

    this.orderSteps = steps;
  }
}
