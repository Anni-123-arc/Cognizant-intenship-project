import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeHeader } from '../home-header/home-header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-helpline',
  standalone: true,
  imports: [CommonModule, RouterModule, HomeHeader, Footer],
  templateUrl: './helpline.html',
  styleUrls: ['./helpline.css']
})
export class HelplineComponent {
  openCategory: string | null = null;

  toggleCategory(category: string) {
    this.openCategory = this.openCategory === category ? null : category;
  }
}
