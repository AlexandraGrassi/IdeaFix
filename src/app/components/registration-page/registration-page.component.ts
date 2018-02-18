import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: 'registration-page.component.html',
  styleUrls: ['registration-page.component.css']

})

export class RegistrationPageComponent implements OnInit {
  constructor() { }

  ngOnInit() {

    $('#first-step #continue').on('click', function(){
      $('#first-step').addClass('hidden');
      $('#second-step').removeClass('hidden');
    });

    $('#second-step #back').on('click', function(){
      $('#second-step').addClass('hidden');
      $('#first-step').removeClass('hidden');
    });

    $('#bday').calendar({
      startMode: 'year',
      type: 'date'
    });

    $('#second-step .country')
      .dropdown({
        direction: 'downward'
      });

  }
}
