import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders = [
    {
      id: 'ORD001',
      productName: 'Rollex watch',
      price: 899.99,
      status: 'Delivered',
      year: '2025',
      imageUrl: "../assets/watch.jpg",
      seller: 'Siri Fashions',
      paymentMode: 'UPI',
      recipientName: 'Rahul Kumar',
      deliveryAddress: '123 MG Road, Hyderabad, Telangana - 500081',
      phone: '9876543210',
      deliveryDate: 'August 3, 2025',
      placedDate: 'Aug 1, 2025',
      deliveredDate: 'Aug 9, 2025'
    },
    {
      id: 'ORD002',
      productName: 'Dell laptop',
      price: 999.99,
      status: 'Shipped',
      year: '2024',
      imageUrl: "../assets/laptop.jpg",
      seller: 'Fashion Collections',
      paymentMode: 'Credit Card',
      recipientName: 'Rahul Kumar',
      deliveryAddress: '123 MG Road, Hyderabad, Telangana - 500081',
      phone: '9876543210',
      placedDate: 'August 9, 2025',
      deliveredDate: ''
    },
    {
      id: 'ORD003',
      productName: 'JBL Bluetooth Earbuds',
      price: 799.99,
      status: 'Cancelled',
      year: '2023',
      imageUrl: "../assets/jbl.jpg",
      seller: 'Sunray Limited',
      paymentMode: 'UPI',
      recipientName: 'Rahul Kumar',
      deliveryAddress: '123 MG Road, Hyderabad, Telangana - 500081',
      phone: '9876543210',
      placedDate: 'July 20, 2025',
      deliveredDate: '',
      cancellationReasons: '',
      cancellationImage: ''
    },
    {
      id: 'ORD004',
      productName: 'Wireless Headphones',
      price: 999.99,
      status: 'Delivered',
      year: '2024',
      imageUrl: "../assets/headphones.jpg",
      seller: 'Knits and Clothes Ltd',
      paymentMode: 'Cash on Delivery',
      recipientName: 'Rahul Kumar',
      deliveryAddress: '123 MG Road, Hyderabad, Telangana - 500081',
      phone: '9876543210',
      placedDate: 'June 10, 2025',
      deliveredDate: 'June 15, 2025'
    },
    {
      id: 'ORD005',
      productName: 'Iphone16 Pro MAX',
      price: 1599.99,
      status: 'Returned',
      year: '2025',
      imageUrl: "../assets/mobile.jpg",
      seller: 'Savera Sarees',
      paymentMode: 'Cash on Delivery',
      recipientName: 'Rahul Kumar',
      deliveryAddress: '123 MG Road, Hyderabad, Telangana - 500081',
      phone: '9876543210',
      placedDate: 'July 28, 2025',
      deliveredDate: 'August 2, 2025',
      returnReasons: '',
      returnImage: ''
    },
    {
      id: 'ORD006',
      productName: 'Asus Gaming Laptop',
      price: 1199.99,
      status: 'Shipped',
      year: '2023',
      imageUrl: "../assets/laptop.jpg",
      seller: 'Hub of Fashion',
      paymentMode: 'Debit Card',
      recipientName: 'Rahul Kumar',
      deliveryAddress: '123 MG Road, Hyderabad, Telangana - 500081',
      phone: '9876543210',
      placedDate: 'August 3, 2025',
      deliveredDate: ''
    }
  ];

  constructor() {}

  getOrders() {
    return this.orders;
  }

  getOrderById(orderId: string) {
    return this.orders.find(order => order.id === orderId);
  }

  // Updated to handle images for both Cancel and Return
  updateOrderStatus(id: string, status: string, reasons: any) {
    const order = this.orders.find(o => o.id === id);
    if (order) {
      order.status = status;

      if (status === 'Cancelled') {
        order.cancellationReasons = reasons;
      } 
      else if (status === 'Returned') {
        order.returnReasons = reasons;
      }
    }
  }
}
