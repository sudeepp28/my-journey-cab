import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asecond',
 standalone:false,
  templateUrl: './asecond.component.html',
  styleUrl: './asecond.component.css'
})
export class AsecondComponent {
constructor(private router:Router){}
goTo(){
  this.router.navigate(['/services'])
}
}
