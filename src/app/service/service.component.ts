import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
 standalone:false,
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
isCallnow=false

openCallNow(){
  this.isCallnow=true
}
closeCallNow(){
  this.isCallnow=false
}
}
