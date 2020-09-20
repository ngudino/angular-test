import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { user } from '../models/user';
import { promise } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {

  private url: any = `https://reqres.in/api/users?page=2`;


  constructor(private http: HttpClient) { }

/*   login(email: string, password: string)
  getUsuarios() promise<usuarios[]>{
 */

login(email: string, password: string): promise<user>
{

}
 }
