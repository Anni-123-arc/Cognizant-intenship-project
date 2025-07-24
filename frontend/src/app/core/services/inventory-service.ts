import { Injectable } from '@angular/core';
import {type PRO} from '../../modules/admin/admin-dashboard/admin-type.model'

type Item = {
      product_id: string,
      product_name: string,
      category: string,
      price: number 
}

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
   

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



  constructor() { }

  addItems(product:PRO){
       const newItem: Item = {
      product_id: `000000 + ${this.inventory.length}`,
      product_name: product.Product_Name,
      category: 'Uncategorized', // or make it part of PRO
      price: product.Price
    };

    this.inventory.push(newItem);
    
  }

  getInventoryItems(){
    return this.inventory
  }

  dltItem(product_id:string){
      return this.inventory.filter((item)=>item.product_id!==product_id)
  }
}
