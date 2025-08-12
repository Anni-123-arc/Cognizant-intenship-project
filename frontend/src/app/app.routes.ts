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
import {Bio} from '././shared/components/bio/bio';
import { ChangePasswordComponent } from './modules/auth/change-password/change-password';
import { LandingPage } from './modules/landing-page/landing-page';
import { ForgotPasswordComponent } from './modules/auth/forgot-password/forgot-password';
import { ResetPasswordComponent } from './modules/auth/reset-password/reset-password';
import { HomeHeader } from './shared/components/home-header/home-header';
import { ScrollableMenuBar } from './shared/components/scrollable-menu-bar/scrollable-menu-bar';
import { SideBar } from './shared/components/side-bar/side-bar';
import { Home } from './modules/home/home';
import { HelplineComponent } from './shared/components/helpline/helpline';
import { ProfileComponent } from './modules/profile/profile';
import { AccountInfoComponent } from './shared/components/account-info/account-info';
import { Address } from './shared/components/address/address';
import { CancelOrderComponent } from './modules/orders/cancel-order/cancel-order';
import { ReturnOrderComponent } from './modules/orders/return-order/return-order';
import { TrackOrder } from './modules/orders/track-order/track-order';

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
  {path: 'home-header', component: HomeHeader}, 
  {path: 'scrollable-menu-bar', component: ScrollableMenuBar},
  {path: 'side-bar', component: SideBar},
  {path: 'home', component: Home},
  {path:'helpline',component: HelplineComponent },
  {path: 'profile', component: ProfileComponent},
  {path: 'account-info', component: AccountInfoComponent},
  {path:'address', component: Address},
  {path: 'orders/:id',component:OrderDetails},
  {path: 'orders/:id/cancel',component:CancelOrderComponent},
  {path:'orders/:id/return',component:ReturnOrderComponent},
  {path:'orders/:id/track-order', component:TrackOrder}
];
