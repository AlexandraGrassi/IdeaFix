import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-profile-tabs',
  templateUrl: './profile-tabs.component.html',
  styleUrls: ['./profile-tabs.component.css']
})
export class ProfileTabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.tabular.menu .item').tab();

  }

}
