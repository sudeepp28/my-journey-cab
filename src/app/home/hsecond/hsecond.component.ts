import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hsecond',
 standalone:false,
  templateUrl: './hsecond.component.html',
  styleUrl: './hsecond.component.css'
})
export class HsecondComponent {
@Output() open=new EventEmitter()

openPopUp(){
  this.open.emit()
}
}
