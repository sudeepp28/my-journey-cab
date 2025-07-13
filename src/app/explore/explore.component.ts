import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-explore',
  standalone:false,
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent implements OnInit{
  
cityName='' 

constructor(private route:ActivatedRoute){}
ngOnInit(): void {
  this.cityName=this.route.snapshot.paramMap.get('city') || ''
  
  


}
ispopup=false

openPopup(){
  this.ispopup=true
}
closePopup(){
  this.ispopup=false
}

 
}
