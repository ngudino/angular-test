import { UserResponse } from '@oauth/models/userResponse';
import { Component, OnInit } from '@angular/core';
import { ServicioLoginService } from '@oauth/services/servicio-login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  blockedDocument = false;
  hide = false;
  private isValidEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  private minimum = 4;
  private subscription: Subscription = new Subscription();
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
    password: ['', [Validators.required, Validators.minLength(this.minimum)]],
  });

  // user: user;


  constructor( private fb: FormBuilder,
               private auth: ServicioLoginService,
               private router: Router,
               private messageService: MessageService ) { }

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
    if (this.loginForm.invalid) {
      return;
    }
    this.blockDocument();
    const formValue = this.loginForm.value;
    this.subscription.add(
      this.auth.loging(formValue).subscribe((res) => {

        this.router.navigate(['/menu/home']);

        },
        (errorMessage) => {
          let error = errorMessage;
          //window.alert('ERES LO MAXIMO CHAPULIN ' + errorMessage);
          console.log(error);
          this.alerta(error);
        }

    )
    );
  }

  getErrorMessage(field: string): string {
    let message = '';
    if (this.loginForm.get(field).hasError('minLenght')) {
      const minLenght = this.loginForm.get(field).errors?.minleght.requiredLenght;
      message = `Este campo debe tener al menos ${minLenght} caracteres`;
    }if (this.loginForm.get(field).errors.required) {
      message = 'Este campo no puede estar vacío';
    } else if (this.loginForm.get(field).hasError('pattern')) {
      message = 'No es un Email válido';
    };

    return message;
  }

  isValidField(field: string): boolean {
    return (
      (this.loginForm.get(field).touched || this.loginForm.get(field).dirty) &&
      !this.loginForm.get(field).valid
    );
  }

  blockDocument(): void {
    this.blockedDocument = true;
    setTimeout(() => {
        this.blockedDocument = false;
    }, 6000);
}

alerta(error){
  this.messageService.clear();
  this.messageService.add({severity:'error', summary:'El usuario o contraseña no es valido', detail: `${error}`});
}
}












  // router link html  [routerLink]="'menu/home'"
