import { Injectable } from '@angular/core';
import { type PRO } from '../../modules/admin/admin-dashboard/admin-type.model'
import {type Item} from  '../../modules/admin/admin-dashboard/admin-type.model'
import {type UPRO} from '../../modules/admin/admin-dashboard/admin-type.model'


@Injectable({
  providedIn: 'root'
})
export class InventoryService {


  inventory = [
    {
      product_id: 'P1001',
      product_name: 'iPhone 14 Pro Max',
      category: 'Electronics',
      price: 1299.99,
      Quantity: 250
    },
    {
      product_id: 'P2001',
      product_name: 'Nike Air Max 270',
      category: 'Fashion',
      price: 149.99,
      Quantity: 69,

    }
  ];

  dltInventory = [
    {
      product_id: 'P1001',
      product_name: 'iPhone 14 Pro Max',
      category: 'Electronics',
      price: 1299.99,
      Quantity: 250

    },
    {
      product_id: 'P2001',
      product_name: 'Nike Air Max 270',
      category: 'Fashion',
      price: 149.99,
      Quantity: 69
    }
  ];


  constructor() { }

  addItems(product: PRO) {
    const newItem: Item = {
      product_id: `000000 + ${this.inventory.length}`,
      product_name: product.Product_Name,
      category: 'Electronics', 
      price: product.Price,
      Quantity:product.Quantity
    };

    this.inventory.push(newItem);

  }

  getInventoryItems() {
    return this.inventory
  }

  dltItem(product_id: string) {
    this.inventory = this.inventory.filter((item) => item.product_id !== product_id)
    return this.inventory
  }

  updateItem(product:UPRO){
    this.inventory = this.inventory.map((item)=>{
      if(item.product_id===product.Product_Id){
        item.Quantity = product.Quantity;
        item.price = product.Price
        return item;
      }
      return item;
    })
  }
}
