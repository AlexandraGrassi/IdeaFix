import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'registration-page.component.html',
  styleUrls: ['registration-page.component.css']

})

export class RegistrationPageComponent {

  rFormRegistre: FormGroup;
  post: any;
  nickname = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private fb: FormBuilder, private router: Router ) {
    this.rFormRegistre = fb.group({
      'nickname': [null, Validators.required],
      'email': [null, Validators.required],
      'password': [null, Validators.required],
      'confirmPassword': [null, Validators.required]
    });


  }
  authorization(post) {
    this.nickname = post.nickname;
    this.email = post.email;
    this.password = post.password;
    this.confirmPassword = post.confirmPassword;
    this.router.navigate(['/feed']);
  }
}

