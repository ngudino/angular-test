
import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '@oauth/component/login/login.component';
import { HomeComponent } from '@oauth/component/home/home.component';
import { E404Component } from '@oauth/component/e404/e404.component';
import { NavBarComponent } from '@oauth/component/nav-bar/nav-bar.component';
import { NosotrosComponent } from '@oauth/component/nosotros/nosotros.component';
import { ContactoComponent } from '@oauth/component/contacto/contacto.component';
import { DocumentacionComponent } from '@oauth/component/documentacion/documentacion.component';




const appRoutes: Routes = [
  { path: '',
    component: LoginComponent,
  },
  { path: 'menu',
  component: NavBarComponent,
    children:[
      { path: 'home',
      component: HomeComponent,
      },
      { path: 'nosotros',
      component: NosotrosComponent,
      },
      { path: 'contacto',
      component: ContactoComponent,
      },
      { path: 'documentacion',
      component: DocumentacionComponent,
      },
    ]},
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
