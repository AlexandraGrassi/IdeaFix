import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {User} from "../../models/user.model";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: 'registration-page.component.html',
  styleUrls: ['registration-page.component.css']
})

export class RegistrationPageComponent implements OnInit {

  regForm: FormGroup;
  isFail: boolean = true;
  isLoading: boolean = false;
  errMsg: string;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

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
      age: ['', Validators.pattern(/^[0-9]{0,3}$/)],
      city: [],
      about: [],
      name: []
    });
  }

  public continueReg() {
    $('#first-step').addClass('hidden');
    $('#continue').addClass('hidden');
    $('#second-step').removeClass('hidden');
  }

  public backToReg(){
    $('#continue').removeClass('hidden');
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

  register(create) {
    let user = new User(null, create.name, create.username, null, false, create.password,
                        create.age, create.mail, create.city, create.country, create.about, null, null);
    this.authService.signUp(user).subscribe(response =>{
      this.isFail = false;
      this.isLoading = false;
      this.router.navigate(['auth'])
    }, responseErrorMessage => {
      this.isLoading = false;
      this.errMsg = responseErrorMessage;
      this.showFailedRegistrationation(); });
  }

  showFailedRegistrationation() {
    $('#authorization-fail-message').removeClass('hidden');
  }
}
