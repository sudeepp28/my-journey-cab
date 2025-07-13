import { Component } from '@angular/core';

@Component({
  selector: 'app-apartner',
  standalone:false,
  templateUrl: './apartner.component.html',
  styleUrl: './apartner.component.css'
})
export class ApartnerComponent {
  slides=[
    {
      src:'assets/apartner 1.jpeg',
      text:'Leading Travel Agencies'
    },
     {
      src:'assets/apartner 2.jpeg',
      text:'Corporate Clients & Event Planners'
    },
     {
      src:'assets/apartner 3.jpeg',
      text:'Tour Operators'
    },
     {
      src:'assets/apartner 4.jpeg',
      text:'Hotel & Resort Chains'
    },
     {
      src:'assets/apartner 5.jpeg',
      text:'Wedding & VIP Event Managers'
    },
     {
      src:'assets/apartner 6.jpeg',
      text:'Airport & Railway Transport Services'
    },
     {
      src:'assets/apartner 7.jpeg',
      text:'Fleet Owners & Local Cab Providers'
    },
  ]
}
