import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styles: [`
  p{
    border: 3px solid rgb(15, 103, 15);;
    background-color:rgb(112, 229, 57);;
    padding: 20px;
  }
  h1{
    color:rgb(112, 229, 57);
  }`
  ]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
