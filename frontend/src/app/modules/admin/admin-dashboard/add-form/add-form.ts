import { Component ,output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {PRO} from '../admin-type.model';

@Component({
  selector: 'app-add-form',
  imports: [FormsModule],
  templateUrl: './add-form.html',
  styleUrl: './add-form.css'
})
export class AddForm {
    
  Product_Name:string = '';
  Quantity:number = 0;
  Price:number = 0;

   product: PRO = {
    Product_Name: this.Product_Name,
    Quantity: this.Quantity,  
    Price: this.Price
    };
    

  productToAdd = output<PRO>()
    
  onSubmit(){
   
    this.productToAdd.emit(this.product);
    
    // Reset the form fields
    this.Product_Name = '';
    this.Quantity = 0;
    this.Price = 0;
  }
}
