import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor() { }

  conversation = [
    { user: 'User', message: 'Hello, I need help with my order.' },
    { user: 'Support', message: 'Sure, I can help you with that. Can you provide your order ID?' }
  ];

  getConversation() {
    return this.conversation;
  }

  pushConvo(message: { user: string, message: string }) {
    this.conversation.push(message);
  }

}
