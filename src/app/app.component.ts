import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultValue='pet';
  genders=['male','female'];
  @ViewChild('f')signupForm:NgForm;
  questionsAnswer='';
  suggestUserName() {
    const suggestedName = 'skawes';
    this.signupForm.form.patchValue({
      userData:{
       username: suggestedName
      }
    })
  }

  onSubmit(){
    console.log(this.signupForm)
  }
}
