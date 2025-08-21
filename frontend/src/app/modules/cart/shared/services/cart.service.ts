// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cartItems = new BehaviorSubject<any[]>([]);
  private _wishlistItems = new BehaviorSubject<any[]>([
    // {
    //   id: 1,
    //   name: 'Wireless Earbuds',
    //   price: 1999,
    //   originalPrice: 2999,
    //   image: '../../../../../assets/cart/demo-earbuds.webp',
    //   deliveryDate: 'Mon, Jun 10'
    // },
    // {
    //   id: 2,
    //   name: 'Smart Watch',
    //   price: 3499,
    //   originalPrice: 4999,
    //   image: '../../../../../assets/cart/demo-watch.webp',
    //   deliveryDate: 'Wed, Jun 12'
    // }
  ]);

  // Expose as public observables
  cartItems$ = this._cartItems.asObservable();
  wishlistItems$ = this._wishlistItems.asObservable();

  // Add to cart
  addToCart(item: any) {
    const currentItems = this._cartItems.value;
    const existingItem = currentItems.find(i => i.id === item.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const cartItem = {
        ...item,
        quantity: 1,
        deliveryDate: item.deliveryDate || this.getDefaultDeliveryDate(),
        originalPrice: item.originalPrice || item.price * 1.5 // Add originalPrice if missing
      };
      // currentItems.push({ ...item, quantity: 1 });
      currentItems.push(cartItem);
    }
    
    this._cartItems.next([...currentItems]);
  }

  // remove from cart
  removeFromCart(itemId: number) {
  const updatedItems = this._cartItems.value.filter(item => item.id !== itemId);
  this._cartItems.next(updatedItems);
  }

  // Move from wishlist to cart
  moveToCart(item: any) {
    this.addToCart(item);
    this.removeFromWishlist(item.id);
  }

  // Wishlist operations
  addToWishlist(item: any) {
    const currentItems = this._wishlistItems.value;

    if (!currentItems.find(i => i.id === item.id)) {
       const wishlistItem = {
        id: item.id,
        name: item.name || 'Unknown Product',
        price: item.price || 0,
        originalPrice: item.originalPrice || item.price || 0,
        image: item.image || 'assets/images/default-product.jpg',
        deliveryDate: item.deliveryDate || this.getDefaultDeliveryDate(),
        // Add any other properties your wishlist item component expects
        description: item.description || '',
        rating: item.rating || 0
      };
    
      console.log('Adding to wishlist:', wishlistItem);
        this._wishlistItems.next([...currentItems, wishlistItem]);
      } else {
      console.log('Item already in wishlist:', item.id);
    }
  }

  removeFromWishlist(itemId: number) {
    const updatedItems = this._wishlistItems.value.filter(item => item.id !== itemId);
    this._wishlistItems.next(updatedItems);
  }

   // Helper to get current value
  get cartItems() {
    return this._cartItems.value;
  }
  
  // Calculate total
  getCartTotal() {
    return this._cartItems.value.reduce((total, item) => 
      total + (item.price * item.quantity), 0);
  }

  // Helper method to generate delivery date
  private getDefaultDeliveryDate(): string {
    const date = new Date();
    date.setDate(date.getDate() + 3); // 3 days from now
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  }

  // In cart.service.ts
updateQuantity(itemId: number, change: number) {
  const items = this._cartItems.value;
  const itemIndex = items.findIndex(item => item.id === itemId);
  
  if (itemIndex > -1) {
    const newQuantity = items[itemIndex].quantity + change;
    
    if (newQuantity > 0) {
      items[itemIndex].quantity = newQuantity;
    } else {
      // Remove if quantity would go to 0 or below
      items.splice(itemIndex, 1);
    }
    
    this._cartItems.next([...items]);
  }
}
}