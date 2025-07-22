import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { OrderSummaryComponent } from '../../components/order-summary/order-summary.component';
import { Navbar } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    FooterComponent,
    CartItemComponent, 
    OrderSummaryComponent
  ],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cartItems = [
    { id: 1, name: 'Product 1', price: 29.99, quantity: 2, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 49.99, quantity: 1, image: 'product2.jpg' }
  ];
}