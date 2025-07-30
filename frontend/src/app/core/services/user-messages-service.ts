import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserMessagesService {

  customerMessages:any[] =[
  {
    "id": 1,
    "name": "John Doe",
    "profileImage": "https://randomuser.me/api/portraits/men/32.jpg",
    "date": "2025-07-19",
    "message": "This platform has completely transformed how I manage my daily tasks. The new dashboard update is fantastic!",
    "reply": ""
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "profileImage": "https://randomuser.me/api/portraits/women/44.jpg",
    "date": "2025-07-18",
    "message": "I reached out to customer support and received help within minutes. Great experience overall!",
        "reply": ""

  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "profileImage": "https://randomuser.me/api/portraits/women/68.jpg",
    "date": "2025-07-17",
    "message": "I love the clean design and ease of use. It makes collaboration with my team so much easier and more efficient.",
    "reply": ""


  },
  {
    "id": 4,
    "name": "Robert Brown",
    "profileImage": "https://randomuser.me/api/portraits/men/75.jpg",
    "date": "2025-07-16",
    "message": "There was a slight learning curve at first, but the tutorials really helped. Now I use this app every day!",
    "reply": ""

  },
  {
    "id": 5,
    "name": "Emily Davis",
    "profileImage": "https://randomuser.me/api/portraits/women/21.jpg",
    "date": "2025-07-15",
    "message": "Thank you for adding the new analytics feature. It’s exactly what we needed for our reporting process.",
    "reply": ""

  }
]


  constructor() { }

  getCustomerMessages() {
    return this.customerMessages;
  }

  setReply(id:number , reply:string){
    this.customerMessages = this.customerMessages.filter((item)=>{
        if(item.id === id){
          item.reply = reply
          console.log(`replied to ${JSON.stringify(item)}`)
        }
        else{
        return item

        }
    })
  }
}
