import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
declare var $: any;

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.css']
})
export class AuthorizationPageComponent implements OnInit {

  isFail: boolean = true;
  phone: string;
  pass: string;
  isLoading: boolean = false;
  errMsg: string;


  constructor(private service: AuthService) {
  }

  ngOnInit() {
    const sourceSwap = function () {
      const $this = $(this);
      const newSource = $this.data('alt-src');
      $this.data('alt-src', $this.attr('src'));
      $this.attr('src', newSource);
    };

    $(function () {
      $('div img.idea').hover(sourceSwap, sourceSwap);
    });

  }

  loginUser() {
    this.isLoading = true;
    this.service.auth(this.phone, this.pass).subscribe( authPair => {
      if (authPair.first == 200 && authPair.first != null) {
        this.service.login(authPair, this.phone, this.pass).subscribe(user => {
          this.service.signIn(authPair);
          this.isFail = false;
          this.isLoading = false;
        }, responseErrorMessage => {
          this.isLoading = false;
          this.errMsg = responseErrorMessage;
          this.showFailedAuthorization(); });
      }  else {
        this.isLoading = false;
        this.showFailedAuthorization();
      }
    }, responseError => {
      this.errMsg = responseError;
      this.isLoading = false;
      this.showFailedAuthorization();
    });

    //for test
    /*this.authorizeService.setUserLoggedIn(true);
     this.router.navigate(['orders']);*/
  }

  showFailedAuthorization() {
    $('#authorization-fail-message').removeClass('hidden');
  }

  registration() {
    // this.router.navigate(['registration']);
  }
}
