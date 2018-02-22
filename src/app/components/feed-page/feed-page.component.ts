import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {IdeaService} from '../../services/idea.service';
/*
import {PaginationInstance} from "ngx-pagination";
*/

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css']
})
export class FeedPageComponent implements OnInit {

  ideas;
  isLoad: boolean = true;

  constructor(private authService: AuthService, private ideaService: IdeaService) { }

  isCorrectStatus(): boolean {
    return this.authService.getUserLoggedIn();
  }

  loading(status: boolean){
    this.isLoad = status;
  }

  ngOnInit() {
    this.ideaService.getIdeasList().subscribe(ideas => {
      this.loading(false);
      this.ideas = ideas;
      console.log(ideas);
    }, responseError => {
      this.loading(false);
      this.ideas = [];
    })
  }

}
