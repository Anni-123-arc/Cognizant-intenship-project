import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HomeHeader } from '../../shared/components/home-header/home-header';
import { Footer } from '../../shared/components/footer/footer';
import { UserService } from '../../core/services/user.service';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, HomeHeader, Footer],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent implements OnInit {
  userData: any = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '9876543210',
    address1: '123 Main Street',
    address2: 'Apartment 4B'
  };

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    // API call: fetch user profile from backend
    this.userService.getProfile().subscribe({
      next: (res) => {
        this.userData = res.user;
      },
      error: (err) => alert(err.error.message || 'Error fetching profile')
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path], { state: { user: this.userData } });
  }

  updateProfile() {
    // API call: send updated profile data to backend
    this.userService.updateProfile(this.userData).subscribe({
      next: () => alert('Profile updated!'),
      error: (err) => alert(err.error.message || 'Error updating profile')
    });
  }

  logout() {
    // API call: optional logout API call could be here

    // Clear user token or session data from localStorage
    localStorage.removeItem('token');

    this.router.navigate(['']);
  }
}
