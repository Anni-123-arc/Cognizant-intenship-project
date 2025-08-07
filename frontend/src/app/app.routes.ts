import { Routes } from '@angular/router';

import { ProductListComponent } from './modules/products/product-list/product-list.component';
import { ProductDetailComponent } from './modules/products/product-detail/product-detail.component';
import { AdminDashboard } from './modules/admin/admin-dashboard/admin-dashboard';
import { CartPageComponent } from './modules/cart/pages/cart-page/cart-page.component';
import { WishlistPageComponent } from './modules/cart/pages/wishlist-page/wishlist-page.component';
import { OrderSummary } from './modules/orders/order-summary/order-summary';
import { OrderDetails } from './modules/orders/order-details/order-details';
import { Login } from './modules/auth/login/login';
import { RegisterComponent } from './modules/auth/register/register';
import { Bio } from './modules/profile/bio/bio';
import { ChangePasswordComponent } from './modules/auth/change-password/change-password';
import { LandingPage } from './modules/landing-page/landing-page';
import { ForgotPasswordComponent } from './modules/auth/forgot-password/forgot-password';
import { ResetPasswordComponent } from './modules/auth/reset-password/reset-password';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'admin', component: AdminDashboard },
  { path: 'cart', component: CartPageComponent },
  { path: 'wishlist', component: WishlistPageComponent },
  { path: 'login', component: Login },
  { path: 'register', component: RegisterComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'bio', component: Bio },
  { path: 'orders', component: OrderSummary },
  { path: 'orders/:id', component: OrderDetails },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
];
