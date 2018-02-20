import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: 'registration-page.component.html',
  styleUrls: ['registration-page.component.css']
})

export class RegistrationPageComponent implements OnInit {

  regForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  public buildForm() {
    this.regForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(32),
        Validators.pattern(/^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/)
        ]
      ],
      mail: ['', [
        Validators.required,
        Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
        ]
      ],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)
        ]
      ],
      country: ['', [
        Validators.required
        ]
      ],
      age: ['', Validators.pattern(/^[0-9]{0,3}$/)]
    });
  }

  public continueReg() {
    $('#first-step').addClass('hidden');
    $('#second-step').removeClass('hidden');
  }

  public backToReg(){
    $('#second-step').addClass('hidden');
    $('#first-step').removeClass('hidden');
  }

  ngOnInit() {
    this.buildForm();

    $('#uploadAvatar').on('change', function () {
      const item = $(this)[0].files;
      const itemPath = $(this)[0].value;
      const itemExt = itemPath.substring(itemPath.lastIndexOf('.') + 1).toLowerCase();
      const itemPreview = $('#preview');
      itemPreview.empty();
      console.log(itemExt);

      if (itemExt === 'gif' || itemExt === 'jpg' || itemExt === 'jpeg' || itemExt === 'png' || itemExt === 'bmp') {
        if (typeof(FileReader) !== 'undefined') {
          const reader = new FileReader();
          const fn = item.name;
          const fs = item.size;
          const ft = item.type;
          reader.onload = function (e: any) {
            $('<img />', {
              'src': e.target.result,
              'class': 'ui medium image avatar-photo'
            }).appendTo(itemPreview);
          };

          itemPreview.show();
          reader.readAsDataURL($(this)[0].files[0]);
        } else {
          itemPreview.html('Some error');
        }
      } else {
        itemPreview.html('Wrong file format');
      }
    });
  }
}
