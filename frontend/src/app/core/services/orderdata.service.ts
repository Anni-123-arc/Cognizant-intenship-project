import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders = [
    {
    id: 'ORD001',
    productName: 'Samsung Galaxy S23 Ultra',
    price: 124999.99,
    status: 'Delivered',
    year: '2025',
    imageUrl: '../assets/Orders/Product 1.jpeg',
    seller: 'Samsung India',
    paymentMode: 'UPI',
    recipientName: 'Rahul Kumar',
    deliveryAddress: '123 MG Road, Hyderabad, Telangana - 500081',
    phone: '9876543210',
    deliveryDate: 'August 16, 2025',
    placedDate: 'Aug 13, 2025',
    deliveredDate: 'Aug 20, 2025'
  },
  {
    id: 'ORD002',
    productName: 'Apple iPhone 15 Pro Max',
    price: 159999.99,
    status: 'Cancelled',
    year: '2025',
    imageUrl: '../assets/Orders/Product 2.jpg',
    seller: 'Apple India',
    paymentMode: 'Credit Card',
    recipientName: 'Sneha Sharma',
    deliveryAddress: '45 Park Street, Kolkata, West Bengal - 700016',
    phone: '9988776655',
    deliveryDate: 'August 7, 2025',
    placedDate: 'Aug 5, 2025',
    cancellationReasons: 'Customer changed mind',
    cancellationImage: 'https://cdn-icons-png.flaticon.com/512/1828/1828665.png'
  },
  {
    id: 'ORD003',
    productName: 'Sony Bravia 55" 4K TV',
    price: 79999.99,
    status: 'Shipped',
    year: '2025',
    imageUrl: '../assets/Orders/Product 3.jpg',
    seller: 'Sony Electronics',
    paymentMode: 'Net Banking',
    recipientName: 'Arjun Verma',
    deliveryAddress: '78 Residency Road, Bengaluru, Karnataka - 560025',
    phone: '9123456780',
    deliveryDate: 'August 15, 2025',
    placedDate: 'Aug 3, 2025',
    deliveredDate: 'Aug 15, 2025',
    returnReasons: 'Screen flickering issue',
    returnImage: 'https://cdn-icons-png.flaticon.com/512/1828/1828843.png'
  },
  {
    id: 'ORD004',
    productName: 'JBL Flip 6 Bluetooth Speaker',
    price: 11999.99,
    status: 'Delivered',
    year: '2024',
    imageUrl: '../assets/Orders/Product 4.jpg',
    seller: 'JBL Store',
    paymentMode: 'UPI',
    recipientName: 'Meera Iyer',
    deliveryAddress: '12 Church Street, Chennai, Tamil Nadu - 600001',
    phone: '9876501234',
    deliveryDate: 'August 4, 2024',
    placedDate: 'Aug 2, 2024',
    deliveredDate: 'Aug 8, 2024'
  },
  {
    id: 'ORD005',
    productName: 'OnePlus Buds Pro 2',
    price: 11999.99,
    status: 'Delivered',
    year: '2023',
    imageUrl: '../assets/Orders/Product 5.jpg',
    seller: 'OnePlus Store',
    paymentMode: 'UPI',
    recipientName: 'Vikas Reddy',
    deliveryAddress: '56 Jubilee Hills, Hyderabad, Telangana - 500033',
    phone: '9845123456',
    deliveryDate: 'August 10, 2023',
    placedDate: 'Aug 7, 2023',
    deliveredDate: 'Aug 12, 2023'
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
