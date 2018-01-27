import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#menu .dropdown')
      .dropdown({
        on: 'hover'
      })
    ;

    $('#menu .my-tab')
      .on('click', function() {
        $('#menu .my-tab').removeClass('active');
        $(this).addClass('active');
      })
    ;

    $('#menu .menu .profile-tab')
      .on('click', function() {
        $('#menu .my-tab').removeClass('active');
      })
    ;
  }

}
