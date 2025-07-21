import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-inventory-card',
  imports: [],
  templateUrl: './inventory-card.html',
  styleUrl: './inventory-card.css'
})
export class InventoryCard {
  @Input() product_id!: string;
  @Input() product_name!: string;
  @Input() category!: string;
  @Input() price!: number;
  @Input() stock!: number;
}
