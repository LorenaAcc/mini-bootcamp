import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-template',
  template:`
  <p>Utilizo my-Custom component</p>
  <app-my-custom></app-my-custom>
  <p>Ahora utilizo server component: </p>
  <app-server></app-server>
  `,
  styleUrls: ['./with-template.component.css']
})
export class WithTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
