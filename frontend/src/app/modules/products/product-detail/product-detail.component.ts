import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ActivatedRoute, RouterModule } from '@angular/router'; 
import { ProductService, Product } from '../../../core/services/product.service'; 
import { ReviewComponent } from '../review/review.component'; 
//import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ReviewComponent],
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
