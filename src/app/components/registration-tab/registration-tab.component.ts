import {Component, DoCheck, OnInit} from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-registration-tab',
  templateUrl: './registration-tab.component.html',
  styleUrls: ['./registration-tab.component.css']
})
export class RegistrationTabComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit() {
  }
  ngDoCheck() {
    $('#registre .registre-tab')
      .on('click', function() {
        $('#registre .registre-tab').removeClass('active');
        $(this).addClass('active');
      })
    ;
  }

}
