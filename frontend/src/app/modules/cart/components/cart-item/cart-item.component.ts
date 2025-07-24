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
  @Input() item: any = {
    image: 'product-image.jpg',
    name: 'Product Name',
    description: 'Product description goes here with important details about the product features.',
    price: 99.99,
    quantity: 1
  };

  updateQuantity(change: number) {
    const newQuantity = this.item.quantity + change;
    if (newQuantity > 0) {
      this.item.quantity = newQuantity;
    }
  }
}