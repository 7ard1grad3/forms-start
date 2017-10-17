import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm; // Access local form referance
  defaultQuestion = 'pet';
  test = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secret: '',
    test: '',
    gender: ''
  };
  submited = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
/*     this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      test: '',
      gender: 'male'
    }); */
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      }
    });
  }


  /* onSubmit(form: NgForm) {
    console.log(form);
  } */
  onSubmit() {
    this.submited = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.test = this.signupForm.value.test;
    this.user.gender = this.signupForm.value.gender;
    console.log(this.signupForm);
  }
  onReset() {
    this.signupForm.reset();
  }
}
