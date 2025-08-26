import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './address.html',
  styleUrls: ['./address.css']
})
export class Address implements OnInit {
  addresses: any[] = [];

  //  fallback static addresses
  staticAddresses = [
    {
      _id: '1',
      label: 'Home',
      addressLine1: '123 Main Street',
      addressLine2: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      postalCode: '10001',
      isDefault: true
    },
    {
      _id: '2',
      label: 'Office',
      addressLine1: '456 Business Rd',
      addressLine2: 'Suite 210',
      city: 'Los Angeles',
      state: 'CA',
      country: 'USA',
      postalCode: '90001',
      isDefault: false
    }
  ];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadAddresses();
  }

  loadAddresses() {
    this.userService.getAddresses().subscribe({
      next: (res) => {
        this.addresses = res.addresses && res.addresses.length > 0 
          ? res.addresses 
          : this.staticAddresses; // fallback
      },
      error: () => {
        console.warn('⚠️ Using static fallback addresses');
        this.addresses = this.staticAddresses;
      }
    });
  }

  addAddress() {
    const newAddr = {
      label: "Home",
      addressLine1: "789 Test Blvd",
      city: "Chicago",
      state: "IL",
      country: "USA",
      postalCode: "60007",
      isDefault: false
    };

    this.userService.addAddress(newAddr).subscribe({
      next: (res) => this.addresses = res.addresses,
      error: () => {
        alert('Failed to add address — using static demo instead');
        this.addresses.push({ ...newAddr, _id: String(Date.now()) });
      }
    });
  }

  editAddress(address: any) {
    const updated = { ...address, label: "Updated" };
    this.userService.updateAddress(address._id, updated).subscribe({
      next: (res) => this.addresses = res.addresses,
      error: () => {
        alert('Failed to update — updating static address');
        const idx = this.addresses.findIndex(a => a._id === address._id);
        if (idx > -1) this.addresses[idx] = updated;
      }
    });
  }

  deleteAddress(id: string) {
    this.userService.deleteAddress(id).subscribe({
      next: (res) => this.addresses = res.addresses,
      error: () => {
        alert('Failed to delete — removing static address');
        this.addresses = this.addresses.filter(a => a._id !== id);
      }
    });
  }
}
