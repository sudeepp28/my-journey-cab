import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
 standalone:false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 constructor(private router: Router){}
isCallnow=false

openCallNow(){
  this.isCallnow=true
}
closeCallNow(){
  this.isCallnow=false
}
goTo(){
this.router.navigate(['/contact'])
}

}
