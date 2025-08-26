import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  //  Matches backend route: GET /users/me
  getProfile(): Observable<{ user: any }> {
    return this.http.get<{ user: any }>(`${this.baseUrl}/users/me`);
  }

  // Matches backend route: PUT /users/me
  updateProfile(data: any): Observable<{ user: any }> {
    return this.http.put<{ user: any }>(`${this.baseUrl}/users/me`, data);
  }

  //  Address CRUD
  getAddresses(): Observable<{ addresses: any[] }> {
    return this.http.get<{ addresses: any[] }>(`${this.baseUrl}/addresses`);
  }

  addAddress(data: any): Observable<{ addresses: any[] }> {
  return this.http.post<{ addresses: any[] }>(`${this.baseUrl}/addresses`, data);
}


  updateAddress(id: string, data: any): Observable<{ addresses: any[] }> {
    return this.http.put<{ addresses: any[] }>(`${this.baseUrl}/addresses/${id}`, data);
  }

  deleteAddress(id: string): Observable<{ addresses: any[] }> {
    return this.http.delete<{ addresses: any[] }>(`${this.baseUrl}/addresses/${id}`);
  }
}
