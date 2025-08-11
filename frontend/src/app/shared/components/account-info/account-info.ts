import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HomeHeader } from '../home-header/home-header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-account-info',
  standalone: true,
  imports: [CommonModule, HomeHeader, Footer],
  templateUrl: './account-info.html',
  styleUrls: ['./account-info.css']
})
export class AccountInfoComponent {
  user: any;

  constructor(private router: Router) {
    this.user = history.state.user || {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '9876543210',
      address1: '123 Main Street',
      address2: 'Apartment 4B'
    };
  }
}
