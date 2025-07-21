//import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { ProductListComponent } from './modules/products/product-list/product-list.component';
import { ProductDetailComponent } from './modules/products/product-detail/product-detail.component';
//import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
];
