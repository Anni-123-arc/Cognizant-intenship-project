import { Component ,output } from '@angular/core';
import { AdminSidebarBtns } from './admin-sidebar-btns/admin-sidebar-btns';
import { InventoryCard } from './inventory-card/inventory-card';
import { InventoryService } from '../../../../core/services/inventory-service';
import { Inventory } from '../admin-type.model';

@Component({
  selector: 'app-admin-sidebar',
  imports: [AdminSidebarBtns, InventoryCard],
  templateUrl: './admin-sidebar.html',
  styleUrl: './admin-sidebar.css'
})
export class AdminSidebar {
    inventory :Inventory[] = []

  constructor(private inventoryService:InventoryService){
    this.inventory = inventoryService.getInventoryItems()
  }

  isVisible = output<boolean>();
  
  dlt(product_id: string) {
    this.inventory = this.inventoryService.dltItem(product_id);
  }

  addProduct() {
    // Logic to add a new product to the inventory
    this.isVisible.emit(true);
  }

  updateInventory() {
    // Logic to update the inventory
   alert('Update Inventory button clicked');
  }
}
