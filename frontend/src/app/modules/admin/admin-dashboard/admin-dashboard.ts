import { Component } from '@angular/core';
// import { AdminNav } from './admin-nav/admin-nav';
import { AdminSidebar } from './admin-sidebar/admin-sidebar';
import { AdminSalesStats } from './admin-sales-stats/admin-sales-stats';
import { AdminOrderManagement } from './admin-order-management/admin-order-management';
import { AdminUserReviews } from './admin-user-reviews/admin-user-reviews';
import { AddForm } from './add-form/add-form'; // Assuming you have an AddForm component
@Component({
  selector: 'app-admin-dashboard',
  imports: [AdminSidebar , AdminSalesStats , AdminOrderManagement , AdminUserReviews , AddForm],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard {
      title="Ecom website"
}
