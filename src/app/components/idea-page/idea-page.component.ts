import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-idea-page',
  templateUrl: './idea-page.component.html',
  styleUrls: ['./idea-page.component.css']
})
export class IdeaPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.author.card .image').dimmer({
      on: 'hover'
    });
  }

}
