import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ActivatedRoute, RouterModule } from '@angular/router'; 
import { ProductService, Product } from '../../../core/services/product.service'; 
import { ReviewComponent } from '../review/review.component'; 
//import { HttpClientModule } from '@angular/common/http';
import { HomeHeader } from '../../../shared/components/home-header/home-header';
import { Footer } from '../../../shared/components/footer/footer';
//import { ScrollableMenuBar } from '../../../shared/components/scrollable-menu-bar/scrollable-menu-bar';
//import { SideBar } from '../../../shared/components/side-bar/side-bar';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, HomeHeader, Footer, RouterModule, ReviewComponent], // ScrollableMenuBar, SideBar,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  //productId: string | null = null;
  product: Product | undefined;
  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  //product: any;
  ngOnInit(): void {

    const productId = Number(this.route.snapshot.paramMap.get('id'));
    if (productId) {
      this.productService.getProductById(productId).subscribe((data: Product | undefined) => {
        this.product = data;    // Fetch correct product
      });
    }
  }

}
