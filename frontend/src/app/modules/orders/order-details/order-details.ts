import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../../core/services/orderdata.service';
import { OrderInvoiceService } from '../../../core/services/orderinvoiceservice';
import { HomeHeader } from '../../../shared/components/home-header/home-header';
import { Footer } from '../../../shared/components/footer/footer';

@Component({
  selector: 'app-order-details',
  imports: [FormsModule, CommonModule, HomeHeader, Footer],
  templateUrl: './order-details.html',
  styleUrl: './order-details.css'
})
export class OrderDetails implements OnInit {
  orderId: string = '';
  order: any;
  showRatingModal = false;
  stars = Array(5).fill(0);
  selectedRating = 0;
  hoveredRating = 0;
  reviewText = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private invoiceService: OrderInvoiceService
  ) {}

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('id') || '';
    this.order = this.orderService.getOrderById(this.orderId);
  }

  // Cancel Order logic
  canCancelOrder(): boolean {
    if (!this.order) return false;

    // Hide button if already Cancelled, Returned, or Delivered
    if (['Cancelled', 'Returned', 'Delivered'].includes(this.order.status)) {
      return false;
    }

    // Allow cancel only within 1 day of placing order
    const orderDate = new Date(this.order.placedDate);
    const currentDate = new Date();
    return (currentDate.getTime() - orderDate.getTime()) / (1000 * 3600 * 24) <= 1;
  }

  // Return Order logic
  canReturnOrder(): boolean {
    if (!this.order) return false;
    if (['Cancelled', 'Returned'].includes(this.order.status)) return false;
    if (this.order.status !== 'Delivered') return false;

    const deliveredDate = new Date(this.order.deliveredDate);
    const currentDate = new Date();
    return (currentDate.getTime() - deliveredDate.getTime()) / (1000 * 3600 * 24) <= 7;
  }

  goToCancelPage() {
    this.router.navigate(['/orders', this.orderId, 'cancel']);
  }

  goToReturnPage() {
    this.router.navigate(['/orders', this.orderId, 'return']);
  }

  openRatingModal() {
    this.showRatingModal = true;
  }

  closeRatingModal() {
    this.showRatingModal = false;
    this.selectedRating = 0;
    this.hoveredRating = 0;
    this.reviewText = '';
  }

  selectStar(star: number) {
    this.selectedRating = star;
  }

  hoverStar(star: number) {
    this.hoveredRating = star;
  }

  submitRating() {
    console.log('Rating submitted:', this.selectedRating);
    console.log('Review:', this.reviewText);
    alert(`Thanks for rating ${this.selectedRating} stars!`);
    this.closeRatingModal();
  }

  downloadInvoice(orderId: string) {
    this.invoiceService.generateInvoice(orderId);
  }

  TrackOrder() {
    this.router.navigate(['/orders', this.orderId, 'track-order']);
  }
}
