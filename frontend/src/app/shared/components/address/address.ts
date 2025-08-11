import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './address.html',
  styleUrls: ['./address.css']
})
export class Address {
  addresses = [
    { name: 'Home', line1: '123 Main Street', line2: 'Apt 4B', city: 'New York', state: 'NY', zip: '10001' },
    { name: 'Office', line1: '456 Business Rd', line2: '', city: 'Los Angeles', state: 'CA', zip: '90001' }
  ];

  addAddress() {
    alert('Add address clicked');
  }

  editAddress(index: number) {
    alert(`Edit address #${index + 1}`);
  }

  deleteAddress(index: number) {
    this.addresses.splice(index, 1);
  }
}
