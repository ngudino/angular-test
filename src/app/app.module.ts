import { InterceptorService } from '@oauth/services/interceptors/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing'; // ruta
import { AppComponent } from './app.component';
import {MessageService} from 'primeng/api';


// primeng

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { BlockUIModule} from 'primeng/blockui';
import {TabViewModule} from 'primeng/tabview';
import {TabMenuModule} from 'primeng/tabmenu';
import {ToastModule} from 'primeng/toast';





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
    HttpClientModule,
    BlockUIModule,
    ProgressSpinnerModule,
    ToastModule,
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  },
  MessageService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
