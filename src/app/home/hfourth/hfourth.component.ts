import { Component } from '@angular/core';

@Component({
  selector: 'app-hfourth',
  standalone:false,
  templateUrl: './hfourth.component.html',
  styleUrl: './hfourth.component.css'
})
export class HfourthComponent {
services=[
  
  {
    title: 'Sedan Services by My Journey Cabs',
    image: 'assets/card sedan.png',
    description: ` Looking for a ride that’s stylish, spacious, and budget-friendly? Our <strong>Sedan fleet</strong> is perfect for city commutes, airport transfers, and outstation trips. Enjoy smooth rides with professional drivers, clean interiors, and reliable performance.`
  },
  {
    title: 'SUV Services by My Journey Cabs',
    image: 'assets/card suv.png',
    description: ` Need more space, power, and comfort for your trip? Our <strong>SUV fleet</strong> is ideal for family vacations, group travel, and rugged outstation journeys. With spacious seating, strong performance, and extra luggage capacity, our SUVs ensure a smooth and safe ride — wherever the road takes you.`
  },
  {
    title: 'Luxury Car Services by My Journey Cabs',
    image: 'assets/card luxury.png',
    description: ` Turn every journey into a first-class experience with our <strong>Luxury Car Fleet</strong>. Whether it’s a wedding, VIP transfer, business meeting, or a grand entrance, we offer top-tier vehicles like <strong> Audi, BMW, Mercedes, and more —</strong> paired with professionally trained chauffeurs and unmatched service.`
  },
  {
    title: 'Tempo Travellers by My Journey Cabs',
    image: 'assets/card tempo.png',
    description: `Looking for a spacious, comfortable, and reliable vehicle for your next trip? My Journey Cabs offers a wide range of <strong>Tempo Travellers from 9-seater to 26-seater</strong>, perfect for family vacations, group tours, corporate outings, or pilgrimage trips.

Whether you're planning a weekend getaway or a long-distance tour, travel together in comfort with My Journey Cabs. Book your Tempo Traveller today and experience hassle-free group travel!`
  }
]
}
