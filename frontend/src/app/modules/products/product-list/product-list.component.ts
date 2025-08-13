import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { ProductService, Product } from '../../../core/services/product.service';
//import { HttpClientModule } from '@angular/common/http';
import { HomeHeader } from '../../../shared/components/home-header/home-header';
import { Footer } from '../../../shared/components/footer/footer';
import { ScrollableMenuBar } from '../../../shared/components/scrollable-menu-bar/scrollable-menu-bar';
import { SideBar } from '../../../shared/components/side-bar/side-bar';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, HomeHeader, Footer, ScrollableMenuBar, SideBar, RouterModule ], // SearchFilterComponent,
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
