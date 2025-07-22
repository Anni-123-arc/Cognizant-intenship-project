import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() item: any; // Make sure this line exists and is properly decorated
  
  updateQuantity(newQuantity: number) {
    if (newQuantity > 0) {
      this.item.quantity = newQuantity;
    }
  }
  
  removeItem() {
    // Implement remove functionality
  }
}