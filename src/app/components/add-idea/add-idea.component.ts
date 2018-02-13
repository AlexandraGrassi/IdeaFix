import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.component.html',
  styleUrls: ['./add-idea.component.css']
})
export class AddIdeaComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.field.remote .ui.dropdown')
      .dropdown({
        direction: 'downward',
        allowAdditions: true,
        apiSettings: {
          url: '//api.semantic-ui.com/tags/{query}',
          cache: false
        }
      });
  }

}
