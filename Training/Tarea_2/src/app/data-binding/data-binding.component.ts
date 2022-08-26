import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
    `h3{
      color:blue;
      font-style: italic;
      }`
  ]
})
export class DataBindingComponent implements OnInit {

  userName: string = "Lorena";
  userID: number = 10;
  status: string = "offLine";

  getUserStatus(){
    return this.status;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
