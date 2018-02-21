import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app works!';
  constructor(private router: Router, private authService: AuthService){}

  ngOnInit() {
    if ( localStorage.getItem('userState') === null ) {
      this.authService.logout();
    }
  }

  isCorrectStatus(): boolean {

    console.log(this.authService.getUserLoggedIn());
    return this.authService.getUserLoggedIn();
  }

  isFalseStatus(): boolean {

    return !this.isCorrectStatus();
  }

}
