///<reference path="../../../../node_modules/protractor/built/element.d.ts"/>
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.css']
})

export class IdeaCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
