import { ServicioLoginService } from '@oauth/services/servicio-login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public authSrvc: ServicioLoginService) { }
    ngOnInit() {
}
 onEvent($e){
   window.alert('Vamos a Reservar');
   console.log($e);
 }

}
