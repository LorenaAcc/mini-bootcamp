import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  signupForm: FormGroup;
  submitted = false;
  projectsNotAllowed = 'Test';

  ngOnInit() {
    this.signupForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.projectsNotAllowedAll.bind(this)], this.projectsNotAllowedAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
    });
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.signupForm);
  }

  projectsNotAllowedAll(control:FormControl): {[key:string]: boolean} {
      if(this.projectsNotAllowed === control.value){
        return{'notAllowedProject':true};
      }
      return null;     
  }

  projectsNotAllowedAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test2') {
          resolve({'notAllowedProjectAsync': true});
        } else {
          resolve(null);
        }
      }, 3000);
    })
    return promise;
  }
}
