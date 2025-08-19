import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ActivatedRoute, Router, RouterModule } from '@angular/router'; 
import { ProductService, Product } from '../../../core/services/product.service'; 
import { ReviewComponent } from '../review/review.component'; 
//import { HttpClientModule } from '@angular/common/http';
import { HomeHeader } from '../../../shared/components/home-header/home-header';
import { Footer } from '../../../shared/components/footer/footer';
import { ScrollableMenuBar } from '../../../shared/components/scrollable-menu-bar/scrollable-menu-bar';
import { SideBar } from '../../../shared/components/side-bar/side-bar';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ReviewComponent, HomeHeader, Footer, ScrollableMenuBar, SideBar],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  //productId: string | null = null;
  product: Product | undefined;
  relatedProducts: Product[] = [];
  averageRating: number = 0;
  
  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService, 
    private router: Router
  ) {}

  //product: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
    this.loadProduct();
  });
  }
  
  loadProduct():void {

    const productId = Number(this.route.snapshot.paramMap.get('id'));
    if (productId) {
      this.productService.getProductById(productId).subscribe((data: Product | undefined) => {
        this.product = data;    // Fetch correct product
      });
    }

    if (this.product) {
      // fetch related products by category
      this.productService.getProductsByCategory(this.product.category).subscribe((related) => {
        this.relatedProducts = related.filter((p: { id: number | undefined; }) => p.id !== this.product?.id); // exclude the current product
     });
    }
    
}

  getStarsArray(rating: number): { full: boolean }[] {
    return Array.from({ length: 5 }, (_, index) => ({
      full: index < Math.round(rating)
    }));
  }

  addToCart() {
    if (this.product) {
      // Here you could store the product in a CartService or localStorage
      console.log('Buying now:', this.product);
      this.router.navigate(['/cart']); // Navigate to cart page
    }
  }

  wishlist() {
    if (this.product) {
      // Optional: Add to cart before redirecting
      console.log('Product added to wishlist:', this.product);
      this.router.navigate(['/wishlist']); // Navigate to cart page directly
    }
  }
  goBack() {
    this.router.navigate(['/products']); // Navigate back to products list
  }
}