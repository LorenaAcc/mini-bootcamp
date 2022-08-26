import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl:'./users.component.html',
  styleUrls: ['./users.component.css']
  // template: `
  //<app-data-binding></app-data-binding>,
  //<app-data-binding></app-data-binding>  `, 
})
export class UsersComponent implements OnInit {
  allowNewUser = false;
  userCreationStatus1 = 'Ningún usuario fue creado';
  userCreationStatus2 = 'Ningún usuario fue creado';
  username1 = '';
  username2 =  'Usuario de Ejemplo'; //variable inicializada

  constructor() { 
    setTimeout(()=>{this.allowNewUser = true;},3000)
  }

  ngOnInit(): void {}
  
  onCreateUser1() {
    this.userCreationStatus1 = '¡El usuario fue creado!';
  }
  onCreateUser2() {
      this.userCreationStatus2 = '¡El usuario fue creado! El nombre es ' + this.username2;
  }

  onUpdateUserName1(event: any) {
    this.username1 = event.target.value;
  }
  
  onUpdateUserName2(event: Event) {
    this.username2 = (<HTMLInputElement>event.target).value;
  }

}
