
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }
    ngOnInit() {
}
 onEvent($e){
   window.alert('Vamos a Reservar');
   console.log($e);
 }

}
