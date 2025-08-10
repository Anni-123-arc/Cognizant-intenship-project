import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserMessagesService } from '../../core/services/user-messages-service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane, faEllipsisV, faUser, faSearch, faReply, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-help-c',
  standalone: true,
  imports: [FormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './help-c.html',
  styleUrls: ['./help-c.css']
})
export class HelpC implements OnInit {
  msg = "";
  replyMsg = "";
  activeMessageId: number | null = null;
  searchQuery = "";
  expandedThreads: number[] = [];
  
  conversation: any[] = [];
  filteredConversation: any[] = [];
  
  // Font Awesome icons
  faPaperPlane = faPaperPlane;
  faEllipsisV = faEllipsisV;
  faUser = faUser;
  faSearch = faSearch;
  faReply = faReply;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  constructor(private userMessagesService: UserMessagesService) { }  

  ngOnInit(): void {
    this.conversation = this.userMessagesService.getCustomerMessages();
    this.filteredConversation = [...this.conversation];
    // Initialize with sample replies for demonstration
    this.initializeSampleReplies();
  }

  initializeSampleReplies() {
    this.conversation = this.conversation.map(msg => {
      if (!msg.replies) {
        msg.replies = [];
      }
      // Add some sample replies for demonstration
      if (msg.id === 1) {
        msg.replies = [
          {
            id: 101,
            name: "Support Team",
            profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
            date: "2025-07-20",
            message: "Thank you for your feedback! We're glad you're enjoying the new dashboard.",
            isAdmin: true
          },
          {
            id: 102,
            name: "John Doe",
            profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
            date: "2025-07-21",
            message: "The performance improvements are especially noticeable. Great work!",
            isAdmin: false
          }
        ];
      }
      return msg;
    });
  }

  sendMessage() {
    if (this.msg.trim()) {
      const newMessage = {
        id: this.conversation.length + 1,
        name: "Admin",
        profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
        date: new Date().toISOString().split('T')[0],
        message: this.msg,
        replies: []
      };
      this.conversation.unshift(newMessage);
      this.filterMessages();
      this.msg = "";
    }
  }

  sendReply(messageId: number) {
    if (this.replyMsg.trim()) {
      const message = this.conversation.find(m => m.id === messageId);
      if (message) {
        const newReply = {
          id: message.replies.length + 1,
          name: "Admin",
          profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
          date: new Date().toISOString().split('T')[0],
          message: this.replyMsg,
          isAdmin: true
        };
        message.replies.push(newReply);
        this.filterMessages();
        this.replyMsg = "";
        // Keep the thread expanded after replying
        if (!this.expandedThreads.includes(messageId)) {
          this.expandedThreads.push(messageId);
        }
      }
    }
  }

  toggleThread(messageId: number) {
    const index = this.expandedThreads.indexOf(messageId);
    if (index === -1) {
      this.expandedThreads.push(messageId);
    } else {
      this.expandedThreads.splice(index, 1);
    }
  }

  isThreadExpanded(messageId: number): boolean {
    return this.expandedThreads.includes(messageId);
  }

  filterMessages() {
    if (!this.searchQuery) {
      this.filteredConversation = [...this.conversation];
    } else {
      const query = this.searchQuery.toLowerCase();
      this.filteredConversation = this.conversation.filter(item => 
        item.message.toLowerCase().includes(query) || 
        item.replies.some((reply: any) => reply.message.toLowerCase().includes(query))
      );
    }
  }

  formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  getReplyCount(replies: any[]): string {
    if (!replies || replies.length === 0) return '';
    return replies.length === 1 ? '1 reply' : `${replies.length} replies`;
  }
}