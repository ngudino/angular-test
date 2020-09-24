import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  items: MenuItem[];

  activeItem: MenuItem;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'home' },
      {label: 'Nosotros', icon: 'pi pi-fw pi-person', routerLink: 'nosotros'},
      {label: 'Contacto', icon: 'pi pi-fw pi-pencil', routerLink: 'contacto' },
      {label: 'Documentation', icon: 'pi pi-fw pi-file', routerLink: 'documentacion'},
      {label: '+', icon: 'pi pi-fw pi-plus', routerLink: 'e404'},

  ];

    this.activeItem = this.items[0];
}


  }

