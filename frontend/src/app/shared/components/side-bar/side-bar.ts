import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css'
})
export class SideBar {
  activeCategory: string | null = null;
  isSidebarOpen: boolean = false;

  categories = [
    {
      name: 'Mobiles',
      subcategories: ['Mobiles', 'Mobile Accessories']
    },
    {
      name: 'Laptops & Computers',
      subcategories: ['Laptops', 'Computer Accessories']
    },
    {
      name: 'Audio Devices',
      subcategories: ['Headphones', 'Earbuds', 'Speakers']
    },
    {
      name: 'Home Appliances',
      subcategories: ['Air Conditioners', 'Refrigerators', 'Washing Machines']
    },
    {
      name: 'Televisions',
      subcategories: ['TVs', 'TV Accessories']
    },
    {
      name: 'Smart Devices',
      subcategories: ['Smart Watches', 'Smart Lights']
    }
  ];

  toggleCategory(categoryName: string): void {
    this.activeCategory = this.activeCategory === categoryName ? null : categoryName;
  }

  openSidebar(): void {
    this.isSidebarOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
    this.activeCategory = null;
    document.body.style.overflow = '';
  }
}
