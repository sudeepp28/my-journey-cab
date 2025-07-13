import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
standalone:false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
isCallnow=false

openCallNow(){
  this.isCallnow=true
}
closeCallNow(){
  this.isCallnow=false
}
}
