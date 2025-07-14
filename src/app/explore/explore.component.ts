import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-explore',
  standalone:false,
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent implements OnInit{
  
cityName='' 
slide:any
 slides=[
    {
      src:'assets/india gate.jpg',
      title:'Explore Delhi',
      para:'From historical wonders to bustling markets – explore the heart of India with My Journey Cabs. Book your ride in Delhi now!',
      para2:'Perfect for city rides and daily travel – enjoy comfort and affordability with our Sedan range.',
      city:'Delhi'


    },
    {
      src:'/assets/bangalore.jpg',
      title:'Explore Bangalore',
      para:'From tech parks to tranquil gardens – discover every corner of Bangalore with My Journey Cabs. Your smooth city ride awaits.',
      para2:'Make every journey grand – ride in style with our premium luxury cars for weddings, VIP travel, and special events',
      city:'Bangalore'


    },
    {
      src:'assets/gateway of india.jpg',
      title:'Explore Mumbai',
      para:'From Marine Drive to Bollywood vibes – experience the spirit of Mumbai with My Journey Cabs. Comfort and class on every drive!',
      para2:'Spacious, powerful, and road-trip ready – our SUVs are built for adventure and long-distance comfort.',
      city:'Mumbai'


    },
    {
    src:'assets/chennai.jpg',
    city:'Chennai'
  },
   {
    src:'assets/goa.jpg',
    city:'Goa'
  },
   {
    src:'assets/bhubaneshwar.jpg',
    city:'Bhubaneshwar'
  },
   {
    src:'assets/srinagar.jpg',
    city:'Srinagar'
  },
   {
    src:'assets/indore.jpg',
    city:'Indore'
  },
   {
    src:'assets/jaipur.jpg',
    city:'Jaipur'
  },
  ]

constructor(private route:ActivatedRoute){}
ngOnInit(): void {
  this.cityName=this.route.snapshot.paramMap.get('city') || ''
  const matchedSlide=this.slides.find(s=>s.city===this.cityName);
 
  this.slide=matchedSlide


}
ispopup=false

openPopup(){
  this.ispopup=true
}
closePopup(){
  this.ispopup=false
}

 
}
