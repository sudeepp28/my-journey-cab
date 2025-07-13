import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-s-first',
  standalone:false,
  templateUrl: './s-first.component.html',
  styleUrl: './s-first.component.css'
})
export class SFirstComponent implements OnInit {
ngOnInit(): void {
  
}
@Output() open=new EventEmitter()

openPopup(){
  this.open.emit()
}
}
