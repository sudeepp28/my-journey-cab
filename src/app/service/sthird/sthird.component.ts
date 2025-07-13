import { Component } from '@angular/core';

@Component({
  selector: 'app-sthird',
  standalone:false,
  templateUrl: './sthird.component.html',
  styleUrl: './sthird.component.css'
})
export class SthirdComponent {
cards=[
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
}
