import { Component ,output } from '@angular/core';
import { AdminSidebarBtns } from './admin-sidebar-btns/admin-sidebar-btns';
import { InventoryCard } from './inventory-card/inventory-card';

@Component({
  selector: 'app-admin-sidebar',
  imports: [AdminSidebarBtns, InventoryCard],
  templateUrl: './admin-sidebar.html',
  styleUrl: './admin-sidebar.css'
})
export class AdminSidebar {
    inventory = [
    {
      product_id: 'P1001',
      product_name: 'iPhone 14 Pro Max',
      category: 'Electronics',
      price: 1299.99 
    },
    {
      product_id: 'P2001',
      product_name: 'Nike Air Max 270',
      category: 'Fashion',
      price: 149.99
    }
  ];

  dlt(product_id: string) {
    this.inventory = this.inventory.filter(item => item.product_id !== product_id);
  }

  addProduct() {
    // Logic to add a new product to the inventory
    alert('Add Product button clicked');
  }

  updateInventory() {
    // Logic to update the inventory
   alert('Update Inventory button clicked');
  }
}
