import { Component } from '@angular/core';
import { AdminDashboard } from './modules/admin/admin-dashboard/admin-dashboard';
@Component({
  selector: 'app-root',
  imports: [AdminDashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Ecom-FrontEnd';
}
