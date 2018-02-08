import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registratration-step2',
  templateUrl: './registratration-step2.component.html',
  styleUrls: ['./registratration-step2.component.css']
})
export class RegistratrationStep2Component  {
  Step2FormRegistre: FormGroup;
  post: any;
  name = '';
  surname = '';
  dateOfBirth = '';
  country = '';
  city = '';
  about = '';

  constructor(private fb: FormBuilder, private router: Router ) {
    this.Step2FormRegistre = fb.group({
      'name': [null, Validators.required],
      'surname': [null, Validators.required],
      'dateOfBirth': [null, Validators.required],
      'city': [null, Validators.required],
      'about': [null, Validators.required]
    });


  }
  authorization(post) {
    this.name = post.name;
    this.surname = post.surname;
    this.dateOfBirth = post.dateOfBirth;
    this.city = post.city;
    this.about = post.about;
    this.router.navigate(['/feed']);
  }
}
