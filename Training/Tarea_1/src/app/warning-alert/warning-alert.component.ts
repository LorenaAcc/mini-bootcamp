import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [`
  p{
    border: 3px solid rgb(194, 206, 18);
    background-color: yellow;
    padding: 20px;
  }
  h1{
    color:rgb(204, 255, 0);
  }`
  ]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
