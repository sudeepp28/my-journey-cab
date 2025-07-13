import { Component } from '@angular/core';

@Component({
  selector: 'app-s-second',
  standalone:false,
  templateUrl: './s-second.component.html',
  styleUrl: './s-second.component.css'
})
export class SSecondComponent {

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
  ]
}
