import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  image_items = input<{ id: number; url: string; alt: string }>();
}
