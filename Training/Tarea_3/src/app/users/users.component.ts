import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl:'./users.component.html',
  styleUrls: ['./users.component.css'] 
})
export class UsersComponent implements OnInit {

  showMessage = false;
  timestamp = new Date();
  logClicks = [];
  

  constructor() { 
  }

  ngOnInit(): void {}
    
  onToggleDetails() {
    this.showMessage = !this.showMessage;
    this.logClicks.push(this.logClicks.length);
  }
}
