import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HomeHeader } from '../../shared/components/home-header/home-header';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, HomeHeader, Footer],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent {
  constructor(private router: Router) {}

  userData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '9876543210',
    address1: '123 Main Street',
    address2: 'Apartment 4B'
  };

  navigateTo(path: string) {
  this.router.navigate([path], { state: { user: this.userData } });
}

  

  logout() {
    // localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
