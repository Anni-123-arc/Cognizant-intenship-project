import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  originalPrice?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  private wishlistItems = new BehaviorSubject<CartItem[]>([]);
  wishlistItems$ = this.wishlistItems.asObservable();

  constructor() { }

  // Cart Methods
  addToCart(item: CartItem) {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(i => i.id === item.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      currentItems.push({ ...item, quantity: 1 });
    }
    
    this.cartItems.next([...currentItems]);
  }

  removeFromCart(itemId: number) {
    const currentItems = this.cartItems.value.filter(item => item.id !== itemId);
    this.cartItems.next([...currentItems]);
  }

  // Wishlist Methods
  addToWishlist(item: CartItem) {
    const currentItems = this.wishlistItems.value;
    if (!currentItems.find(i => i.id === item.id)) {
      this.wishlistItems.next([...currentItems, item]);
    }
  }

  removeFromWishlist(itemId: number) {
    const currentItems = this.wishlistItems.value.filter(item => item.id !== itemId);
    this.wishlistItems.next([...currentItems]);
  }

  moveToCart(item: CartItem) {
    this.addToCart(item);
    this.removeFromWishlist(item.id);
  }

  getCartTotal() {
    return this.cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}