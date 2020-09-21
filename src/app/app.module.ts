import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing'; // ruta
import { AppComponent } from './app.component';


// primeng

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import {TabViewModule} from 'primeng/tabview';
import {TabMenuModule} from 'primeng/tabmenu';





// componentes creados
import { LoginComponent } from '@oauth/component/login/login.component';
import { E404Component } from '@oauth/component/e404/e404.component';
import { HomeComponent } from '@oauth/component/home/home.component';
import { NavBarComponent } from '@oauth/component/nav-bar/nav-bar.component';
import { NosotrosComponent } from './oauth/component/nosotros/nosotros.component';
import { ContactoComponent } from './oauth/component/contacto/contacto.component';
import { DocumentacionComponent } from './oauth/component/documentacion/documentacion.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    E404Component,
    HomeComponent,
    NavBarComponent,
    NosotrosComponent,
    ContactoComponent,
    DocumentacionComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TabViewModule,
    TabMenuModule,
    ButtonModule,
    InputTextModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
