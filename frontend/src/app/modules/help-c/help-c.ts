import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserMessagesService } from '../../core/services/user-messages-service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faPaperPlane, faSearch, faUserCog, faTruck, 
  faChartLine, faHistory, faLaptop, faMobile, 
  faTablet, faCheckCircle, faExclamationCircle 
} from '@fortawesome/free-solid-svg-icons';
import { OrderManagement } from '../../core/services/order-management';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-c',
  standalone: true,
  imports: [FormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './help-c.html',
  styleUrls: ['./help-c.css']
})
export class HelpC {
  flag = 0;
  orderId = '';
  customerId = '';
  response: {success: boolean, message: string, details?: string} | null = null;
  orderHistory: any[] = [];

  // Icons
  faPaperPlane = faPaperPlane;
  faSearch = faSearch;
  faUserCog = faUserCog;
  faTruck = faTruck;
  faChartLine = faChartLine;
  faHistory = faHistory;
  faLaptop = faLaptop;
  faMobile = faMobile;
  faTablet = faTablet;
  faCheckCircle = faCheckCircle;
  faExclamationCircle = faExclamationCircle;

  constructor(
    private userMessagesService: UserMessagesService,
    private orderManagement: OrderManagement,
    private router: Router
  ) {}

  setFlag(value: number) {
    this.flag = value;
    this.response = null; // Clear previous responses when changing option
  }

  onTrack() {
    if (!this.orderId) {
      this.response = {
        success: false,
        message: 'Please enter an order ID'
      };
      return;
    }

    const status = this.orderManagement.getOrderDetails(this.orderId);
    console.log(status)
    
    if (status) {
      this.response = {
        success: true,
        message: `Order #${this.orderId}`,
        details: `Status: ${status}`
      };
    } else {
      this.response = {
        success: false,
        message: `Order not found`,
        details: 'Please check your order ID and try again'
      };
    }
  }

  onGetHistory() {
    if (!this.customerId) {
      this.response = {
        success: false,
        message: 'Please enter a valid email address'
      };
      return;
    }

    // Simulate API call
    this.orderHistory = this.orderManagement.getOrderHistory(this.customerId);
  }

  navigateToAccount() {
    this.router.navigate(['/account/settings']);
  }
}