import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeHeader } from '../home-header/home-header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [CommonModule, FormsModule, HomeHeader, Footer],
  templateUrl: './bio.html',
  styleUrls: ['./bio.css']
})
export class Bio {
  @Input() user: any;
  editableUser: any = {};

  constructor(private router: Router) {}

  ngOnInit() {
    const navData = history.state.user; // read passed data
    this.editableUser = navData ? { ...navData } : { ...this.user };
  }

  saveChanges() {
    // Navigate to account-info with updated data
    this.router.navigate(['/account-info'], { state: { user: this.editableUser } });
  }
}
