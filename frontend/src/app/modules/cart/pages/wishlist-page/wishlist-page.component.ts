import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistItemComponent } from '../../components/wishlist-item/wishlist-item.component';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { Footer } from '../../../../shared/components/footer/footer';

@Component({
  selector: 'app-wishlist-page',
  standalone: true,
  imports: [CommonModule, WishlistItemComponent, RouterLink , NavbarComponent, Footer ,],
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.css']
})
export class WishlistPageComponent {
  // Dummy data for UI development
  wishlistItems = [
    {
      id: 1,
      image: 'earbuds.jpg',
      name: 'INNOMAX K1 True Wireless Earbuds',
      price: 3499,
      originalPrice: 3998,
      deliveryDate: 'Thu Jul 31'
    },
    {
      id: 2,
      image: 'smartwatch.jpg',
      name: 'Fire-Boltt Ninja 3 Smartwatch',
      price: 1799,
      originalPrice: 4999,
      deliveryDate: 'Fri Nov 29'
    }
  ];

  // Mock handlers for UI events
  handleRemove(itemId: number) {
    console.log('Item removed:', itemId);
    // UI-only removal for demo
    this.wishlistItems = this.wishlistItems.filter(item => item.id !== itemId);
  }

  handleMoveToCart(item: any) {
    console.log('Moved to cart:', item);
    // UI-only action for demo
    this.handleRemove(item.id);
  }

  constructor(private router: Router) {}

  navigateToCart() {
    this.router.navigate(['/cart']);
  }
}