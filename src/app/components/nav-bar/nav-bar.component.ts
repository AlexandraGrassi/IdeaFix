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
/*    $('.menu .user')
      .popup({
        popup: $('.popup'),
        inline     : true,
        hoverable  : true,
        position   : 'bottom left',
        on: 'click'
      })
    ;*/

    $('#menu .dropdown')
      .dropdown({
        on: 'hover'
      })
    ;
  }

}
