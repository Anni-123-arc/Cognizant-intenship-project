import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PRO } from '../admin-type.model';

@Component({
  selector: 'app-add-form',
  imports: [FormsModule],
  templateUrl: './add-form.html',
  styleUrl: './add-form.css'
})
export class AddForm {

  Product_Name: string = '';
  Quantity: number = 0;
  Price: number = 0;

  product: PRO = {
    Product_Name: this.Product_Name,
    Quantity: this.Quantity,
    Price: this.Price
  };


  productToAdd = output<PRO>() //output signal to emit product data
  hideM = output<boolean>();  // output signal to hide the modal

  onSubmit() {
    const product: PRO = {
      Product_Name: this.Product_Name,
      Quantity: this.Quantity,
      Price: this.Price
    };

    this.productToAdd.emit(product);

    // Optional: Reset fields after submission
    this.Product_Name = '';
    this.Quantity = 0;
    this.Price = 0;

    this.hideModal()
  }



  hideModal() {
    this.hideM.emit(false);
  }
}
