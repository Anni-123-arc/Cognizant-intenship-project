//import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { ProductListComponent } from './modules/products/product-list/product-list.component';
import { ProductDetailComponent } from './modules/products/product-detail/product-detail.component';
import { AdminDashboard } from './modules/admin/admin-dashboard/admin-dashboard';
import { CartPageComponent } from './modules/cart/pages/cart-page/cart-page.component';
import { WishlistPageComponent } from './modules/cart/pages/wishlist-page/wishlist-page.component';
//import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  // { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'admin', component: AdminDashboard },
  { path: 'cart',component:CartPageComponent},
  { path: 'Wishlist',component:WishlistPageComponent},
];
