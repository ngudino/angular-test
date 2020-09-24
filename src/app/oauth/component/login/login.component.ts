
import { validarInput } from '@oauth/component/login/app.validator';
import { Component, OnInit } from '@angular/core';
import { ServicioLoginService } from '@oauth/services/servicio-login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '@oauth/models/user';
import { Subscription } from 'rxjs';
import { min } from 'rxjs/operators';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private isValidEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  private subscription: Subscription;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  // user: user;


  constructor(private fb: FormBuilder,
              private auth: ServicioLoginService,
              private router: Router) { }

  ngOnInit(): void {
    // this.login(this.user);

    /* this.user.email = 'eve.holt@reqres.in';
    this.user.password = 'cityslicka'; */

    //this.auth.loging(this.user).subscribe((res) => console.log(res));
    }
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

  // tslint:disable-next-line: align
  onLogin(): void {
    // console.log('recibo accion login')
      const formValue = this.loginForm.value;
      this.subscription.add(
        this.auth.loging(formValue).subscribe((res) => {
        console.log('data formulario->',  formValue);
        if (res) {
          this.router.navigate(['/menu/home']);
        }
      })
      );
    }

  getErrorMessage(field: string){
    let message = '';
    if(this.loginForm.get(field).errors.required){
      message = 'Ingrese datos válidos';
    } else if(this.loginForm.get(field).hasError('pattern') ) {
      message = 'No es un Email válido';
    } else if( this.loginForm.get(field).hasError('minlenght') ) {
      const minLenght = this.loginForm.get(field).errors?.minLength.requiredLenght;
      message = `Este campo debe tener al menos ${minLenght} caracteres` ;
    }
    return message;
  }

  isValidField(field: string): boolean {
    return(  (this.loginForm.get(field).touched) || this.loginForm.get(field).dirty)  &&
    !this.loginForm.get(field).valid;
  }
  }












  // router link html  [routerLink]="'menu/home'"
