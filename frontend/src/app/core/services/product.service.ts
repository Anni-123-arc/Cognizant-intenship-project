import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//import { HttpClient } from '@angular/common/http';
import axios from 'axios';

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  image: string;
  reviews: Review[];
}
export interface Review {
  user: string;
  comment: string;
  rating: number;
}



@Injectable({
  providedIn: 'root'
})

export class ProductService {
  //private baseUrl = 'http://localhost:5000/api/products';
  //constructor(private http: HttpClient) {}
  
  private products: Product[] = [
    {
      id: 1,
      name: 'Nike Air Zoom',
      brand: 'Nike',
      category: 'Shoes',
      price: 7999,
      description: 'Comfortable running shoes',
      image: 'assets/nike shoe.jpeg',
      reviews: [
        { user: 'Alice', rating: 5, comment: 'Best shoes ever!' },
        { user: 'Bob', rating: 4, comment: 'Really good quality.' }  
      ]
    },
    {
      id: 2,
      name: 'Adidas Sneakers',
      brand: 'Adidas',
      category: 'Shoes',
      price: 2500,
      description: 'Perfect for daily workouts.',
      image: 'assets/adidas shoe.jpg',
      reviews: [
        { user: 'Preety', rating: 5, comment: 'Great Product!' },
        { user: 'Emma', rating: 4, comment: 'Stylish sneakers from Adidas.' }
      ]
    },
    {
      id: 3,
      name: 'Puma Runner',
      brand: 'Puma',
      category: 'Shoes',
      price: 3999,
      description: 'Perfect for daily workouts.',
      image: 'assets/puma shoe.jpg',
      reviews: [
        { user: 'John', rating: 5, comment: 'Amazing fit!' },
        { user: 'Emma', rating: 3, comment: 'Slightly tight at toes.' }
      ]
    },
    {
      id: 4,
      name: 'Nike Air Zoom',
      brand: 'Nike',
      category: 'Shoes',
      price: 7999,
      description: 'Comfortable running shoes',
      image: 'assets/nike shoe.jpeg',
      reviews: [
        { user: 'Alice', rating: 5, comment: 'Best shoes ever!' },
        { user: 'Bob', rating: 4, comment: 'Really good quality.' }
      ]
    },
    {
      id: 5,
      name: 'Adidas Sneakers',
      brand: 'Adidas',
      category: 'Shoes',
      price: 2500,
      description: 'Perfect for daily workouts.',
      image: 'assets/adidas shoe.jpg',
      reviews: [
        { user: 'Preety', rating: 5, comment: 'Great Product!' },
        { user: 'Emma', rating: 4, comment: 'Stylish sneakers from Adidas.' }
      ]
    },
    {
      id: 6,
      name: 'Puma Runner',
      brand: 'Puma',
      category: 'Shoes',
      price: 3999,
      description: 'Perfect for daily workouts.',
      image: 'assets/puma shoe.jpg',
      reviews: [
        { user: 'John', rating: 5, comment: 'Amazing fit!' },
        { user: 'Emma', rating: 3, comment: 'Slightly tight at toes.' }
      ]
    },
    {
      id: 7,
      name: 'Nike Air Zoom',
      brand: 'Nike',
      category: 'Shoes',
      price: 7999,
      description: 'Comfortable running shoes',
      image: 'assets/nike shoe.jpeg',
      reviews: [
        { user: 'Alice', rating: 5, comment: 'Best shoes ever!' },
        { user: 'Bob', rating: 4, comment: 'Really good quality.' }
      ]
    },
    {
      id: 8,
      name: 'Adidas Sneakers',
      brand: 'Adidas',
      category: 'Shoes',
      price: 2500,
      description: 'Perfect for daily workouts.',
      image: 'assets/adidas shoe.jpg',
      reviews: [
        { user: 'Preety', rating: 5, comment: 'Great Product!' },
        { user: 'Emma', rating: 4, comment: 'Stylish sneakers from Adidas.' }
      ]
    },
    {
      id: 9,
      name: 'Puma Runner',
      brand: 'Puma',
      category: 'Shoes',
      price: 3999,
      description: 'Perfect for daily workouts.',
      image: 'assets/puma shoe.jpg',
      reviews: [
        { user: 'John', rating: 5, comment: 'Amazing fit!' },
        { user: 'Emma', rating: 3, comment: 'Slightly tight at toes.' }
      ]
    },
    {
      id: 10,
      name: 'Nike Air Zoom',
      brand: 'Nike',
      category: 'Shoes',
      price: 7999,
      description: 'Comfortable running shoes',
      image: 'assets/nike shoe.jpeg',
      reviews: [
        { user: 'Alice', rating: 5, comment: 'Best shoes ever!' },
        { user: 'Bob', rating: 4, comment: 'Really good quality.' }
      ]
    },
    {
      id: 11,
      name: 'Adidas Sneakers',
      brand: 'Adidas',
      category: 'Shoes',
      price: 2500,
      description: 'Perfect for daily workouts.',
      image: 'assets/adidas shoe.jpg',
      reviews: [
        { user: 'Preety', rating: 5, comment: 'Great Product!' },
        { user: 'Emma', rating: 4, comment: 'Stylish sneakers from Adidas.' }
      ]
    },
    {
      id: 12,
      name: 'Puma Runner',
      brand: 'Puma',
      category: 'Shoes',
      price: 3999,
      description: 'Perfect for daily workouts.',
      image: 'assets/puma shoe.jpg',
      reviews: [
        { user: 'John', rating: 5, comment: 'Amazing fit!' },
        { user: 'Emma', rating: 3, comment: 'Slightly tight at toes.' }
      ]
    },
    {
      id: 13,
      name: 'Nike Air Zoom',
      brand: 'Nike',
      category: 'Shoes',
      price: 7999,
      description: 'Comfortable running shoes',
      image: 'assets/nike shoe.jpeg',
      reviews: [
        { user: 'Alice', rating: 5, comment: 'Best shoes ever!' },
        { user: 'Bob', rating: 4, comment: 'Really good quality.' }
      ]
    },
    {
      id: 14,
      name: 'Adidas Sneakers',
      brand: 'Adidas',
      category: 'Shoes',
      price: 2500,
      description: 'Perfect for daily workouts.',
      image: 'assets/adidas shoe.jpg',
      reviews: [
        { user: 'Preety', rating: 5, comment: 'Great Product!' },
        { user: 'Emma', rating: 4, comment: 'Stylish sneakers from Adidas.' }
      ]
    },
    {
      id: 15,
      name: 'Puma Runner',
      brand: 'Puma',
      category: 'Shoes',
      price: 3999,
      description: 'Perfect for daily workouts.',
      image: 'assets/puma shoe.jpg',
      reviews: [
        { user: 'John', rating: 5, comment: 'Amazing fit!' },
        { user: 'Emma', rating: 3, comment: 'Slightly tight at toes.' }
      ]
    }
  ];
  
  getProducts(): Observable<Product[]> {
    //return this.http.get<Product[]>(this.baseUrl);
    return of(this.products);  // Use mock array
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    //return this.http.get<Product>(`${this.baseUrl}/${id}`);
    return of(product);  // Use mock array
  }



}
