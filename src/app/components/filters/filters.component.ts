import { Component, OnInit, DoCheck } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit() {

  }

  ngDoCheck() {
    $('#filter .filter-tab')
      .on('click', function() {
        $('#filter .filter-tab').removeClass('active');
        $(this).addClass('active');
      })
    ;
  }

}
