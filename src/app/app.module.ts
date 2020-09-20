import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './component/login/login.component';
import { E404Component } from './component/e404/e404.component';
import { HomeComponent } from './component/home/home.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    E404Component,
    HomeComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
