import { validarInput } from '@oauth/component/login/app.validator';
import { Component, OnInit } from '@angular/core';
import { ServicioLoginService } from '@oauth/services/servicio-login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { user } from '@app/oauth/models/user';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  router: Router;
  user: user = {
    email: 'eje@je.com',
    password: '1234'
  };



  constructor(private fb: FormBuilder, private auth: ServicioLoginService) {
    console.log('AppComponent::constructor');
    this.createForm();
  }

  ngOnInit(): void {
    // this.login(this.user);

  }

  createForm(): void {
    console.log('AppComponent::createForm');
    this.loginform = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    }, {
      validators: validarInput
    });

    this.loginform.controls['email']
      .valueChanges.subscribe(data => {
        console.log(data);
      });
  }

  onSubmit(): void {
    if (this.loginform.valid) {
      console.log(this.loginform.value);
    } else {
      alert('error');
    }
  }

  /* login(user: user) {

    console.log('ejecuto');

    this.auth.login(user.email, user.password)
      .pipe(first())
      .subscribe(
          data => {
            console.log(data);
          //this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log(error);
        });
  } */
  //this.router.navigate(['home']);
}

/* aplicarValidacion(): boolean {
  return this.form.hasError('no corresponde') && this.form.get('email').dirty && this.form.get('password').dirty;
} */
