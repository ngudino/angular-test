import { validarInput } from './app.validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  router: Router;



  constructor(private fb: FormBuilder) {
    console.log('AppComponent::constructor');
    this.createForm();
   }

  ngOnInit(): void {
    // this.initForm();
    /* this.loginform = new FormGroup({
      email: new FormControl(''),
      password:  new FormControl(''),
    }); */

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
    if(this.loginform.valid){
      console.log(this.loginform.value);
    } else {
      alert('error');
    }
  }

  login(){
    console.log('ejecuto');
    this.router.navigate(['home']);
  }
}
/* aplicarValidacion(): boolean {
  return this.form.hasError('no corresponde') && this.form.get('email').dirty && this.form.get('password').dirty;
} */
