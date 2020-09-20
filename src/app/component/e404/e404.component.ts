import { Router, ActivatedRoute, Routes } from '@angular/router';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-e404',
  templateUrl: './e404.component.html',
  styleUrls: ['./e404.component.css']
})
export class E404Component implements OnInit {
routes: Router;
  constructor() { }

  ngOnInit(): void {
  }

 onclick(): void{
    this.routes.navigate(['home']);
  }
}
