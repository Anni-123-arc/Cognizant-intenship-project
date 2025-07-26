import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-summary',
  imports: [ CommonModule, FormsModule],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.css'
})
export class OrderSummary {
 selectedFilter: string = 'All';
  selectedYear: string = 'All';
  searchText: string = '';

  filters = ['All', 'Pending', 'Delivered', 'Cancelled', 'Returned'];
  years = ['All', '2025', '2024', '2023'];

  orders = [
    {
      id: 'ORD001',
      productName: 'Maxi Girls Long Frock for Women',
      price: 899.99,
      status: 'Delivered',
      year: '2025',
      imageUrl: "../assets/Prod1.jpg"
    },
    {
      id: 'ORD002',
      productName: 'Maxi Tiered Frock for Women',
      price: 999.99,
      status: 'Pending',
      year: '2024',
      imageUrl: "../assets/Prod2.jpg"
    },
    {
      id: 'ORD003',
      productName: 'Long Dress for Women Traditional',
      price: 799.99,
      status: 'Cancelled',
      year: '2023',
      imageUrl: "../assets/Prod3.jpg"
    },
    {
      id: 'ORD004',
      productName: 'Fit Knitted Black Shirt For Men',
      price: 999.99,
      status: 'Delivered',
      year: '2024',
      imageUrl: "../assets/Prod4.jpg"
    },
    {
      id: 'ORD005',
      productName: 'Silk Saree for Women',
      price: 1599.99,
      status: 'Returned',
      year: '2025',
      imageUrl: "../assets/Prod5.jpg"
    },
    {
      id: 'ORD006',
      productName: 'Beige Banarasi Kurta For Men',
      price: 1199.99,
      status: 'Pending',
      year: '2023',
      imageUrl: "../assets/Prod6.jpg"
    }
  ];

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
  constructor(private router: Router) {}

viewOrder(orderId: string) {
  this.router.navigate(['/orders', orderId]);
}
}


