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

    $('.right.menu.open').on('click', function(e){
      e.preventDefault();
      $('.ui.vertical.menu').toggle();
    });

    $('.ui.vertical.menu .item')
      .on('click', function() {
        $('.ui.vertical.menu .item').removeClass('active');
        $(this).addClass('active');
        $('.ui.vertical.menu').toggle();
      })
    ;

    $('#menu #add-idea').on('click', function(){
      $('.add-modal')
        .modal('show')
      ;
    });

    $('.add-modal').modal({
      closable: true
    });
  }

  // logout() {
  //   localStorage.setItem('userState', JSON.stringify({isUserLoggedIn: false, authPair: null}));
  //   // localStorage.clear();
  // }
}
