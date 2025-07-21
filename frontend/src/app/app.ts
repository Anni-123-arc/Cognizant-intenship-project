import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
// import { AdminDashboard } from './modules/admin/admin-dashboard/admin-dashboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,RouterModule],
  //imports: [RouterModule.forRoot(routes)],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'Ecommerce';
}
