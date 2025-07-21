import { Component, Input } from '@angular/core';
import { UserMessagesService } from '../../../../../core/services/user-messages-service';

@Component({
  selector: 'app-review-card',
  imports: [],
  templateUrl: './review-card.html',
  styleUrl: './review-card.css'
})
export class ReviewCard {
    @Input({required: true}) messages!: {
  id: number;
  name: string;
  profileImage: string;
  date: string; // ISO format date, e.g., "2025-07-19"
  message: string;
};

    constructor(){}
}
