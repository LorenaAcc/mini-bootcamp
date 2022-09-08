import { Component} from '@angular/core';
//if we use @ViewChild():
//import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //@ViewChild('f') dataForm: NgForm;
  defaultSubscription = 'advanced';
  data = {
    email:'',
    subscription:'',
    password:''
  };
  submitted = false;
  
  onSubmit(form:NgForm){
    console.log(form);
    this.submitted = true;
    this.data.email = form.value.formData.email;
    this.data.subscription = form.value.formData.subscription;
    this.data.password = form.value.formData.password;
    //if we use @ViewChild()
    // onSubmit(){
    // this.submitted = true;
    // this.data.email = this.dataForm.value.formData.email;
    // this.data.subscription = this.dataForm.value.formData.subscription;
    // this.data.password = this.dataForm.value.formData.password;
    form.reset();
  }

}
