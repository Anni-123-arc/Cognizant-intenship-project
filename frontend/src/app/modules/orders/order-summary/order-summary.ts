import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../../../core/services/orderdata.service';
import { HomeHeader } from '../../../shared/components/home-header/home-header';
import { Footer } from '../../../shared/components/footer/footer';
@Component({
  selector: 'app-order-summary',
  imports: [ CommonModule, FormsModule,HomeHeader,Footer],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.css'
})
export class OrderSummary implements OnInit {
 selectedFilter: string = 'All';
  selectedYear: string = 'All';
  searchText: string = '';
  orders: any[] = [];

  filters = ['All','Shipped','Delivered', 'Cancelled', 'Returned'];
  years = ['All', '2025', '2024', '2023'];

 constructor(private router: Router, private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders = [];
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getOrders().subscribe({
      next: (data) => this.orders = data,
      error: (err) => console.error(err)
    });
  }

  setFilter(filter: string): void {
    this.selectedFilter = filter;
  }

  get filteredOrders() {
    return this.orders.filter(order => {
      const matchStatus = this.selectedFilter === 'All' || order.status === this.selectedFilter;
      const matchYear = this.selectedYear === 'All' || order.year === this.selectedYear;
      const matchSearch = this.searchText.trim() === '' || order.productName.toLowerCase().includes(this.searchText.toLowerCase());
      return matchStatus && matchYear && matchSearch;
    });
  }

  viewOrder(orderId: string) {
    this.router.navigate(['/orders', orderId]);
  }
}
