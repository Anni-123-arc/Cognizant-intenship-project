import { Component, output } from '@angular/core';

@Component({
  selector: 'app-carousal',
  imports: [],
  templateUrl: './carousal.html',
  styleUrl: './carousal.css'
})
export class Carousal {
     images = [
      {id:1 , url:'../../../../assets/carousel-images/flash-sale1.jpg' , alt:'carousel images'},
      {id:2 , url:'../../../../assets/carousel-images/flash-sale2.jpg' , alt:'carousel images'},
      {id:3 , url:'../../../../assets/carousel-images/flash-sale3.jpg' , alt:'carousel images'},
     ]

     length = this.images.length
     currentId = 0

     url:string =this.images[this.currentId].url;
     alt:string =this.images[this.currentId].alt;

  //   ngOnInit(): void {
  //      setInterval(()=>{
  //           this.nextSlide(1)
  //      },2000)
  //  }

     nextSlide(n:number){
        this.currentId = (this.currentId + n)%this.length
        if(this.currentId<0){
          this,this.currentId = this.length -1;
        }
        this.url = this.images[this.currentId].url;
        this.alt = this.images[this.currentId].alt;

        console.log(this.url)
       
     }

     currentSlide(n:number){
      this.currentId = n -1
        this.url = this.images[this.currentId].url;
        this.alt = this.images[this.currentId].alt;
     }

     


   
}
