import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css']
})
export class FeedPageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public isCorrectStatus(): boolean {
    return this.authService.getUserLoggedIn();
  }

  ngOnInit() {
  }

}
