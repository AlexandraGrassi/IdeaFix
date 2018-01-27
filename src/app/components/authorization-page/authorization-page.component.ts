import { Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';



@Component({
  moduleId: module.id,
  selector: 'app-authorization-page',
  templateUrl: 'authorization-page.component.html',
  styleUrls: ['authorization-page.component.css']

})

export class AuthorizationPageComponent {
  rForm: FormGroup;
  post: any;
  login = '';
  password = '';

  constructor(private fb: FormBuilder, private router: Router ) {
    this.rForm = fb.group({
      'login': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }
  authorization(post) {
    this.login = post.login;
    this.password = post.password;

    this.router.navigate(['/feed']);
  }
}
