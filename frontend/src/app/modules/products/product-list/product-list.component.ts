import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { ProductService, Product } from '../../../core/services/product.service';
//import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, SearchFilterComponent, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}
  //private productService = inject(ProductService);

  ngOnInit(): void {

    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      });
  }

}
