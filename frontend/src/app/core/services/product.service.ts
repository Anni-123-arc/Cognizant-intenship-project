import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//import { HttpClient } from '@angular/common/http';
import axios from 'axios';

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  subCategory?: string; 
  description: string;
  price: number;
  image: string;
  reviews: Review[];
  rating: number; // Added rating property
}
export interface Review {
  user: string;
  comment: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  //private baseUrl = 'http://localhost:5000/api/products';
  //constructor(private http: HttpClient) {}
  
  private products: Product[] = [
    {
      id: 1,
      name: 'Dell XPS 15',
      brand: 'Dell',
      category: 'Laptops & Computers',
      price: 100999,
      description: 'Laptop from Dell with high performance.',
      image: 'assets/Product-Pics/dell_15.jpg',
      rating: 4.5,
      reviews: [
        { user: 'Alice', rating: 5, comment: 'Best laptop ever!' },
        { user: 'Bob', rating: 4, comment: 'Really good.' }  
      ]
    },
    {
      id: 2,
      name: 'LG Smart Refrigerator',
      brand: 'LG',
      category: 'Home Appliances',
      price: 60999,
      description: 'Fresh refridgerator ever.',
      image: 'assets/Product-Pics/Fridge_LG.png',
      rating: 5,
      reviews: [
        { user: 'Emily', rating: 5, comment: 'More space to arrage things!' },
        { user: 'Dany', rating: 4, comment: 'Cool quickly.' }
      ]
    },
    {
      id: 3,
      name: 'iPhone 14',
      brand: 'iPhone',
      category: 'Mobiles',
      price: 90500,
      description: 'Perfect Phone of all.',
      image: 'assets/Product-Pics/iphone-14-pro.jpg',
      rating: 4.5,
      reviews: [
        { user: 'Preety', rating: 5, comment: 'Great Product!' },
        { user: 'Harsh', rating: 4, comment: 'Working Perfectly.' }
      ]
    },
    {
      id: 4,
      name: 'Sony WH-1000XM5',
      brand: 'Sony',
      category: 'Audio Devices',
      price: 900,
      description: 'Best headphones from us.',
      image: 'assets/Product-Pics/Headphones_sony.jpg',
      rating: 4,
      reviews: [
        { user: 'Chinni', rating: 5, comment: 'Good output!' },
        { user: 'Jenny', rating: 4, comment: 'Adjustable and nice.' }
      ]
    },
    {
      id: 5,
      name: 'Anker Power Bank',
      brand: 'Anker',
      category: 'Mobiles',
      price: 699,
      description: 'Quality power bank with fast charging.',
      image: 'assets/Product-Pics/Powerbank.jpg',
      rating: 4,
      reviews: [
        { user: 'Andy', rating: 4, comment: 'Charge fastly!' },
        { user: 'Sri', rating: 3.5, comment: 'Good product.' }
      ]
    },
    {
      id: 6,
      name: 'Sony Bravia 55" 4K',
      brand: 'Sony',
      category: 'Televisions',
      price: 27999,
      description: 'High quality 4K TV with smart features.',
      image: 'assets/Product-Pics/TV_Sony.jpg',
      rating: 4.5,
      reviews: [
        { user: 'Bindu', rating: 5, comment: 'Good display!' },
        { user: 'Vishu', rating: 4, comment: 'Have latest features.' }
      ]
    },
    {
      id: 7,
      name: 'Apple Watch Series 8',
      brand: 'Apple',
      category: 'Smart Devices',
      price: 3500,
      description: 'Perfect for daily wearing.',
      image: 'assets/Product-Pics/Apple-Watch.jpg',
      rating: 5,
      reviews: [
        { user: 'Rupa', rating: 5, comment: 'Great Product!' },
        { user: 'Lalasa', rating: 4, comment: 'Looks stylish.' }
      ]
    },
    {
      id: 8,
      name: 'Logitech MX Master 3 Mouse',
      brand: 'Logitech',
      category: 'Laptops & Computers',
      price: 199,
      description: 'Perfect for PCs.',
      image: 'assets/Product-Pics/Logitech-MX.jpg',
      rating: 3.5,
      reviews: [
        { user: 'John', rating: 3, comment: 'Cable need to be extend.' },
        { user: 'Emma', rating: 4, comment: 'Correctly fitted to my PC.' }
      ]
    },
    {
      id: 9,
      name: 'boAt Airdopes 181 Pro Earbuds',
      brand: 'boAt',
      category: 'Audio Devices',
      price: 1599,
      description: 'Technology & ASAP Charge Bluetooth Earbuds.',
      image: 'assets/Product-Pics/181Earbuds.png',
      rating: 4,
      // Added reviews for the product
      reviews: [
        { user: 'Bhavya', rating: 5, comment: 'Like this, superbbb.' },
        { user: 'Pushpa', rating: 3, comment: 'Noise cancellation is not working.' }
      ]
    },
    {
      id: 10,
      name: 'BOSCH Front Load Washing Machine',
      brand: 'BOSCH',
      category: 'Home Appliances',
      price: 38999,
      description: '9 kg Fully Automatic Front Load Washing Machine ',
      image: 'assets/Product-Pics/washingMachine.jpg',
      rating: 4,
      reviews: [
        { user: 'George', rating: 4, comment: 'Good product!' },
        { user: 'Pradeep', rating: 5, comment: 'Great Wash quality.' }
      ]
    },
    {
      id: 11,
      name: 'RD Mounts TV Wall Stand',
      brand: 'RD Mounts',
      category: 'Televisions',
      price: 1300,
      description: 'RD PLAST 32 - 43 inch Swivel Wall Mount TV Stand.',
      image: 'assets/Product-Pics/wall-mount.jpg',
      rating: 3,
      reviews: [
        { user: 'Sammi', rating: 2, comment: 'Poor Product!' },
        { user: 'Abhi', rating: 4, comment: 'Useful, liked it.' }
      ]
    },
    {
      id: 12,
      name: 'MacBook Air M2',
      brand: 'Apple',
      category: 'Laptops & Computers',
      price: 89999,
      description: 'Perfect Laptop from Apple.',
      image: 'assets/Product-Pics/silver-macbook.jpg',
      rating: 5,
      reviews: [
        { user: 'Ganesh', rating: 5, comment: 'Amazing product!' },
        { user: 'Alex', rating: 4, comment: 'Slightly heavier to carry.' }
      ]
    },
    {
      id: 13,
      name: 'Samsung 1.5 Ton AC',
      brand: 'Samsung',
      category: 'Home Appliances',
      price: 75000,
      description: 'Cools your environment.',
      image: 'assets/Product-Pics/AC.jpg',
      rating: 5,
      reviews: [
        { user: 'Tilak', rating: 5, comment: 'Well conditioning the air.' },
        { user: 'Uma', rating: 4, comment: 'Great Product!' }
      ]
    },
    {
      id: 14,
      name: 'Samsung Galaxy S23',
      brand: 'Samsung',
      category: 'Mobiles',
      price: 35000,
      description: 'Perfect for daily users.',
      image: 'assets/Product-Pics/Samsung-S23.png',
      rating: 5,
      reviews: [
        { user: 'Preety', rating: 5, comment: 'Great Product!' },
        { user: 'Farzan', rating: 4, comment: 'Good display.' }
      ]
    },
    {
      id: 15,
      name: 'Wireless Charger',
      brand: 'Anker',
      category: 'Smart Devices',
      price: 1100,
      description: 'Easy to chargable.',
      image: 'assets/Product-Pics/wireless-charger.jpeg',
      rating: 4,
      reviews: [
        { user: 'Jake', rating: 4, comment: 'Working good!' },
        { user: 'Kumar', rating: 3, comment: 'Bad Connector.' }
      ]
    },
    {
      id: 16,
      name: 'Mechanical Keyboard',
      brand: 'Logitech',
      category: 'Laptops & Computers',
      price: 299,
      description: 'Comfortable Keybooard with mechanical keys.',
      image: 'assets/Product-Pics/keyboard.jpg',
      rating: 4,
      reviews: [
        { user: 'Ojesh', rating: 4, comment: 'Best Keyboard!' },
        { user: 'Irfan', rating: 3, comment: 'Keys are not working sometimes.' }
      ]
    },
    {
      id: 17,
      name: 'Canon EOS R50 Mirrorless Camera',
      brand: 'Canon',
      category: 'Smart Devices',
      price: 50250,
      description: 'Capture stunning photos and videos with the Canon EOS R50.',
      image: '../assets/Orders/Product 7.jpg',
      rating: 5,
      reviews: [
        { user: 'Satya', rating: 5, comment: 'Autofocus working well.' },
        { user: 'Laxmi', rating: 4, comment: 'Good Product!' }
      ]
    },
    {
      id: 18,
      name: 'Boat Rockerz 255 Bluetooth Earphones',
      brand: 'Boat',
      category: 'Audio Devices',
      price: 379,
      description: 'Stylish Earphones with good sound quality.',
      image: '../assets/Orders/Product 11.jpg',
      rating: 3,
      reviews: [
        { user: 'Lucky', rating: 4, comment: 'Stylish Earphones!' },
        { user: 'Alia', rating: 3, comment: 'Sound quality not as expected' }
      ]
    },
    {
      id: 19,
      name: 'Samsung QLED 65" TV',
      brand: 'Samsung',
      category: 'Televisions',
      price: 45999,
      description: 'Display high quality.',
      image: 'assets/Product-Pics/LED.jpg',
      rating: 5,
      reviews: [
        { user: 'Madhavi', rating: 5, comment: 'Good Visiblility screen.' },
        { user: 'Gagan', rating: 4, comment: 'Great Product!' }
      ]
    },
    {
      id: 20,
      name: 'Philips Smart Bulb',
      brand: 'Philips',
      category: 'Smart Devices',
      price: 79,
      description: 'Work even powercut.',
      image: 'assets/Product-Pics/bulb.jpg',
      rating: 3,
      reviews: [
        { user: 'Devi', rating: 4, comment: 'Lighting well!' },
        { user: 'Keerthi', rating: 3, comment: 'Blinking sometimes.' }
      ]
    },
    {
      id: 21,
      name: 'SanDisk 64GB USB Pendrive',
      brand: 'SanDisk',
      category: 'Televisions',
      price: 599,
      description: 'High-performance gaming laptop with NVIDIA graphics.',
      image: '../assets/Orders/Product 9.jpg',
      rating: 5,
      reviews: [
        { user: 'Tara', rating: 5, comment: 'Best gaming experience!' },
        { user: 'Ramya', rating: 4, comment: 'Good for gaming.' }
      ]
    },
    {
      id: 22,
      name: 'Asus ROG Strix G15',
      brand: 'Asus',
      category: 'Laptops & Computers',
      price: 115000,
      description: 'Gaming beast laptop with AMD Ryzen 9 and RTX 3070 GPU.',
      image: 'assets/Product-Pics/asus-rog-strix-g15.jpg',
      rating: 5,
      reviews: [
        { user: 'Nikhil', rating: 5, comment: 'Runs every game smoothly!' },
        { user: 'Deepa', rating: 4, comment: 'Bit heavy but powerful.' }
      ]
    },
    {
      id: 23,
      name: 'JBL Flip 6 Portable Bluetooth Speaker',
      brand: 'JBL',
      category: 'Audio Devices',
      price: 4999,
      description: 'Enjoy powerful sound on the go with the JBL Flip 6.',
      image: '../assets/Orders/Product 4.jpg',
      rating: 4,
      reviews: [
        { user: 'Rohan', rating: 5, comment: 'Great sound quality!' },
        { user: 'Priya', rating: 4, comment: 'Battery life is good.' }
      ]
    },
    {
      id: 24,
      name: 'Google Pixel 7 Pro',
      brand: 'Google',
      category: 'Mobiles',
      price: 78000,
      description: 'Smartphone with best-in-class camera and smooth Android experience.',
      image: 'assets/Product-Pics/google-pixel7.jpg',
      rating: 5,
      reviews: [
        { user: 'Rohit', rating: 5, comment: 'Camera quality is insane!' },
        { user: 'Donald', rating: 4, comment: 'Battery could be better.' }
      ]
    },
    {
      id: 25,
      name: 'Whirlpool Double Door Refrigerator',
      brand: 'Whirlpool',
      category: 'Home Appliances',
      price: 48999,
      description: 'Energy efficient refrigerator with large capacity.',
      image: 'assets/Product-Pics/whirlpool-fridge.jpg',
      rating: 4,
      reviews: [
        { user: 'John', rating: 5, comment: 'Spacious and works well.' },
        { user: 'Meena', rating: 3, comment: 'Consumes more electricity.' }
      ]
    },
    {
      id: 26,
      name: 'Sony In-Ear Headphones',
      brand: 'Sony',
      category: 'Audio Devices',
      price: 1999,
      description: 'In-ear headphones with noise cancellation and high sound quality.',
      image: 'assets/Orders/Product 14.jpg',
      rating: 4,
      reviews: [
        { user: 'Manish', rating: 4, comment: 'Excellent sound quality!' },
        { user: 'Janu', rating: 4, comment: 'Comfortable for long use.' }
      ]
    },
    {
      id: 27,
      name: 'Google Nest Hub 2',
      brand: 'Google',
      category: 'Smart Devices',
      price: 7999,
      description: 'Smart display with Google Assistant.',
      image: 'assets/Product-Pics/nest-hub.jpg',
      rating: 4,
      reviews: [
        { user: 'Teja', rating: 4, comment: 'Good for smart home setup.' },
        { user: 'Megha', rating: 3, comment: 'Screen is small.' }
      ]
    },
    {
      id: 28,
      name: 'LG 75" OLED 4K TV',
      brand: 'LG',
      category: 'Televisions',
      price: 120000,
      description: 'Immersive OLED display with Dolby Vision and Atmos.',
      image: 'assets/Product-Pics/lg-oled.jpg',
      rating: 5,
      reviews: [
        { user: 'Varun', rating: 5, comment: 'Best display I’ve ever seen!' },
        { user: 'Sheela', rating: 5, comment: 'Worth every penny.' }
      ]
    },
    {
      id: 29,
      name: 'Marshall Stanmore II Speaker',
      brand: 'Marshall',
      category: 'Audio Devices',
      price: 28999,
      description: 'Classic speaker design with powerful bass.',
      image: 'assets/Product-Pics/marshall.jpeg',
      rating: 5,
      reviews: [
        { user: 'Amit', rating: 5, comment: 'Best speaker for parties!' },
        { user: 'Sara', rating: 4, comment: 'Vintage look is amazing.' }
      ]
    },
    {
      id: 30,
      name: 'HP Omen Gaming Desktop',
      brand: 'HP',
      category: 'Laptops & Computers',
      price: 135000,
      description: 'High-performance desktop for gamers and creators.',
      image: 'assets/Product-Pics/hp-omen-desktop.jpg',
      rating: 5,
      reviews: [
        { user: 'Karan', rating: 5, comment: 'Superb gaming PC!' },
        { user: 'Ravi', rating: 4, comment: 'Fans get noisy.' }
      ]
    },
    {
      id: 31,
      name: 'Samsung Galaxy Z Flip 5',
      brand: 'Samsung',
      category: 'Mobiles',
      price: 89000,
      description: 'Foldable smartphone with innovative design.',
      image: 'assets/Product-Pics/galaxy-zflip5.jpg',
      rating: 4.5,
      reviews: [
        { user: 'Sneha', rating: 5, comment: 'Cool foldable phone!' },
        { user: 'Hari', rating: 4, comment: 'Expensive but stylish.' }
      ]
    },
    {
      id: 32,
      name: 'Amazon Echo Dot (5th Gen)',
      brand: 'Amazon',
      category: 'Smart Devices',
      price: 4499,
      description: 'Smart speaker with Alexa voice assistant.',
      image: 'assets/Product-Pics/echo-dot.jpg',
      rating: 4.5,
      reviews: [
        { user: 'Nila', rating: 5, comment: 'Very useful in daily life.' },
        { user: 'Ashok', rating: 4, comment: 'Mic sometimes lags.' }
      ]
    },
    {
      id: 33,
      name: 'Dyson V12 Cordless Vacuum Cleaner',
      brand: 'Dyson',
      category: 'Home Appliances',
      price: 54999,
      description: 'Powerful suction and lightweight cordless vacuum.',
      image: 'assets/Product-Pics/dyson.jpg',
      rating: 5,
      reviews: [
        { user: 'Maya', rating: 5, comment: 'Cleaning is effortless now!' },
        { user: 'Aravind', rating: 4, comment: 'Expensive but efficient.' }
      ]
    },
    {
      id: 34,
      name: 'Mi 18W Fast Charger',
      brand: 'Xiaomi',
      category: 'Mobiles',
      price: 499,
      description: 'Fast charger for Mi devices with 18W output.',
      image: '../assets/Orders/Product 12.jpg',
      rating: 4,
      reviews: [
        { user: 'Shekar', rating: 4, comment: 'Charges quickly!' },
        { user: 'Rani', rating: 3, comment: 'Average build quality.' }
      ]
    },
    {
      id: 35,
      name: 'DJI Mini 3 Drone',
      brand: 'DJI',
      category: 'Smart Devices',
      price: 78999,
      description: 'Lightweight drone with 4K HDR video capture.',
      image: 'assets/Product-Pics/mini-drone.jpeg',
      rating: 5,
      reviews: [
        { user: 'Ramesh', rating: 5, comment: 'Perfect for travel videos!' },
        { user: 'Anita', rating: 4, comment: 'Battery life could be better.' }
      ]
    },
    {
      id: 36,
      name: 'Mi 43" Smart TV',
      brand: 'Xiaomi',
      category: 'Televisions',
      price: 25999,
      description: 'Budget-friendly smart TV with Android OS.',
      image: 'assets/Product-Pics/Mi-Tv.png',
      rating: 4,
      reviews: [
        { user: 'Naveen', rating: 4, comment: 'Great value for money.' },
        { user: 'Moni', rating: 3, comment: 'Audio could be better.' }
      ]
    },
    {
      id: 37,
      name: 'IFB Microwave Oven',
      brand: 'IFB',
      category: 'Home Appliances',
      price: 15999,
      description: 'Convection microwave with 200+ auto cook menus.',
      image: 'assets/Product-Pics/ifb-oven.jpg',
      rating: 4.5,
      reviews: [
        { user: 'Arjun', rating: 5, comment: 'Great for baking.' },
        { user: 'Pooja', rating: 4, comment: 'Easy to use.' }
      ]
    },
    {
      id: 38,
      name: 'Realme Buds Wireless 3',
      brand: 'Realme',
      category: 'Audio Devices',
      price: 1999,
      description: 'Neckband earphones with long battery life.',
      image: 'assets/Product-Pics/earbuds.jpg',
      rating: 4,
      reviews: [
        { user: 'Krish', rating: 4, comment: 'Bass is good.' },
        { user: 'Nisha', rating: 3, comment: 'Connectivity drops sometimes.' }
      ]
    },
    {
      id: 39,
      name: 'iPhone 15 Silicone Case',
      brand: 'Apple',
      category: 'Mobiles',
      price: 1299,
      description: 'Protective silicone case for iPhone 15.',
      image: '../assets/Orders/Product 10.jpg',
      rating: 4.5,
      reviews: [
        { user: 'Sunil', rating: 5, comment: 'Fits perfectly!' },
        { user: 'Chandu', rating: 4, comment: 'Good quality case.' }
      ]
    },
    {
      id: 40,
      name: 'Generic Mobile Phone Holder',
      brand: 'Generic Electronics',
      category: 'Mobiles',
      price: 399,
      description: 'Universal mobile phone holder for car and desk.',
      image: '../assets/Orders/Product 15.jpg',
      rating: 3.5,
      reviews: [
        { user: 'Shreya', rating: 4, comment: 'Convenient for car use.' },
        { user: 'Sita', rating: 3, comment: 'Not very sturdy.' }
      ]
    },
    {
      id: 41,
      name: 'OnePlus Nord CE 3',
      brand: 'OnePlus',
      category: 'Mobiles',
      price: 27000,
      description: 'Mid-range smartphone with fast charging and smooth OxygenOS.',
      image: 'assets/Product-Pics/oneplus-nord.jpg',
      rating: 4,
      reviews: [
        { user: 'Anu', rating: 4, comment: 'Smooth UI, great value.' },
        { user: 'Raj', rating: 3, comment: 'Camera is average.' }
      ]
    },
    {
      id: 42,
      name: 'Fitbit Charge 6',
      brand: 'Fitbit',
      category: 'Smart Devices',
      price: 15999,
      description: 'Fitness tracker with heart rate monitoring and GPS.',
      image: 'assets/Product-Pics/fitbit.jpg',
      rating: 4,
      reviews: [
        { user: 'Isha', rating: 5, comment: 'Tracks workouts perfectly.' },
        { user: 'Suresh', rating: 4, comment: 'Battery lasts 5 days.' }
      ]
    },
    {
      id: 43,
      name: 'Panasonic Air Purifier',
      brand: 'Panasonic',
      category: 'Home Appliances',
      price: 19999,
      description: 'Removes 99% of pollutants with HEPA filter.',
      image: 'assets/Product-Pics/panasonic-airpurifier.jpg',
      rating: 4.5,
      reviews: [
        { user: 'Sonia', rating: 5, comment: 'Fresh air inside home.' },
        { user: 'Prakash', rating: 4, comment: 'Works well in small rooms.' }
      ]
    },
    {
      id: 44,
      name: 'TP-Link 32GB MicroSD Card',
      brand: 'TP-Link',
      category: 'Laptops & Computers',
      price: 899,
      description: 'High-speed microSD card with 32GB storage.',
      image: '../assets/Orders/Product 13.jpg',
      rating: 4,
      reviews: [
        { user: 'Divya', rating: 4, comment: 'Good storage for my phone.' },
        { user: 'Kiran', rating: 4, comment: 'Fast read/write speeds.' }
      ]
    },
    {
      id: 45,
      name: 'Bose SoundLink Flex Speaker',
      brand: 'Bose',
      category: 'Audio Devices',
      price: 11999,
      description: 'Portable speaker with clear sound and rugged design.',
      image: 'assets/Product-Pics/bose.jpg',
      rating: 5,
      reviews: [
        { user: 'Geeta', rating: 5, comment: 'Amazing sound quality.' },
        { user: 'Nilesh', rating: 4, comment: 'Compact and stylish.' }
      ]
    },
    {
      id: 46,
      name: 'Lenovo ThinkPad X1 Carbon',
      brand: 'Lenovo',
      category: 'Laptops & Computers',
      price: 125000,
      description: 'Business laptop with excellent keyboard and durability.',
      image: 'assets/Product-Pics/lenovo-thinkpad.jpg',
      rating: 4.5,
      reviews: [
        { user: 'Anil', rating: 5, comment: 'Best for office use.' },
        { user: 'Sunita', rating: 4, comment: 'Sleek and lightweight.' }
      ]
    }
  ];
  
  getProducts(): Observable<Product[]> {
    //return this.http.get<Product[]>(this.baseUrl);
    return of(this.products);  // Use mock array
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    //return this.http.get<Product>(`${this.baseUrl}/${id}`);
    return of(product);  // Use mock array
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const filteredProducts = this.products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
  return of(filteredProducts);
  }

}
