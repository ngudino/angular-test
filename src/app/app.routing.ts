import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { E404Component } from './component/e404/e404.component';



const appRoutes: Routes = [
  { path: '',
    component: LoginComponent,
  },
  { path: 'home',
    component: HomeComponent,
  },
  {path: '**',
  component: E404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

  public getRoute() {
    return appRoutes;
  }
}
