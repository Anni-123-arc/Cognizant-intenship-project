import { Component } from '@angular/core';
import { ReviewCard } from './review-card/review-card';
import { UserMessagesService } from '../../../../core/services/user-messages-service';

@Component({
  selector: 'app-admin-user-reviews',
  standalone: true,
  imports: [ReviewCard],
  templateUrl: './admin-user-reviews.html',
  styleUrl: './admin-user-reviews.css'
})
export class AdminUserReviews {
      messages: any[] = [];
      constructor(private userMessagesService: UserMessagesService) {
          this.messages = this.userMessagesService.getCustomerMessages();
      }
}
