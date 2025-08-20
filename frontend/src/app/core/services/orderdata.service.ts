// src/app/core/services/orderdata.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/api/orders'; // Backend API

  constructor(private http: HttpClient) {}

  // Fetch all orders
  getOrders() {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Fetch order by ID
  getOrderById(orderId: string) {
    return this.http.get<any>(`${this.apiUrl}/${orderId}`);
  }

  // Update order status
  updateOrderStatus(id: string, status: string, reasons: any) {
    return this.http.put<any>(`${this.apiUrl}/${id}/status`, { status, reasons });
  }
}
