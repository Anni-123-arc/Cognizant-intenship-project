import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];
  wishlistItems: any[] = [];

  addToWishlist(item: any) {
    if (!this.wishlistItems.some(i => i.id === item.id)) {
      this.wishlistItems.push(item);
    }
  }

  removeFromWishlist(itemId: number) {
    this.wishlistItems = this.wishlistItems.filter(item => item.id !== itemId);
  }

  moveToCart(item: any) {
    this.addToCart(item);
    this.removeFromWishlist(item.id);
  }

  addToCart(item: any) {
    // Your existing cart logic
  }
}