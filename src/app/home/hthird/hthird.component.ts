import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hthird',
  standalone:false,
  templateUrl: './hthird.component.html',
  styleUrl: './hthird.component.css'
})
export class HthirdComponent {
  constructor(private router: Router){}
goTo(){
this.router.navigate(['/services'])
}
}
