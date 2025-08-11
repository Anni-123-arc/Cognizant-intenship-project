import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-order-details',
  imports: [FormsModule,CommonModule, RouterModule],
  templateUrl: './order-details.html',
  styleUrl: './order-details.css'
})
export class OrderDetails implements OnInit {
orderId: string = '';
  order: any;

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('id') || '';

    // Simulated static data for UI
    const sampleOrders = [
      {
        id: 'ORD001',
        productName: 'Maxi Girls Long Frock for Women',
        price: 899.99,
        imageUrl: '../assets/Prod1.jpg',
        seller: 'Siri Fashions',
        status: 'Delivered',
        paymentMode: 'UPI'
      },
      {
        id: 'ORD002',
        productName: 'Maxi Tiered Frock for Women',
        price: 999.99,
        imageUrl: '../assets/Prod2.jpg',
        seller: 'Fashion Collections',
        status: 'Pending',
        paymentMode: 'Credit Card'
      },
      {
        id: 'ORD003',
        productName: 'Long Dress for Women Traditional',
        price: 799.99,
        imageUrl: '../assets/Prod3.jpg',
        seller: 'Sunray Limited',
        status: 'Cancelled',
        paymentMode: 'UPI'
      },
      {
        id: 'ORD004',
        productName: 'Fit Knitted Black Shirt For Men',
        price: 999.99,
        imageUrl: '../assets/Prod4.jpg',
        seller: 'Knits and Clothes Ltd',
        status: 'Delivered',
        paymentMode: 'Cash on Delivery'
      },
      {
        id: 'ORD005',
        productName: 'Silk Saree for Women',
        price: 999.99,
        imageUrl: '../assets/Prod5.jpg',
        seller: 'Savera Sarees',
        status: 'Returned',
        paymentMode: 'Cash on Delivery',
        recipientName: 'Rahul Kumar',
        deliveryAddress: '123 MG Road, Hyderabad, Telangana - 500081',
        phone: '9876543210',
        deliveryDate: 'August 3, 2025'
      },
      {
        id: 'ORD006',
        productName: 'Beige Banarasi Kurta For Men',
        price: 1199.99,
        imageUrl: '../assets/Prod6.jpg',
        seller: 'Hub of Fashion',
        status: 'Pending',
        paymentMode: 'Debit Card'
      }

    ];

    this.order = sampleOrders.find(o => o.id === this.orderId);
  }

  constructor(private route: ActivatedRoute) {}
}
