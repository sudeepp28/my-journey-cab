import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afirst',
  standalone:false,
  templateUrl: './afirst.component.html',
  styleUrl: './afirst.component.css'
})
export class AfirstComponent {
constructor(private router:Router){}
goTo(){
  this.router.navigate(['/services'])
}
}
