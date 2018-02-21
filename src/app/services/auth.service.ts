import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
// import {User} from '../models/user.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Pair} from '../../Pair';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  regUrl = 'http://localhost:8090/register';
  loginUrl = 'http://localhost:8090/login';

  private isUserLoggedIn = false;
  // private username;
  private authPair: Pair;
  // private user: User;

  private token: string;
  private status: number = 0;

  private static http: Http;

  constructor(private http: Http, private router: Router) {
    // AuthService.http = http;
    const mySanya = localStorage.getItem('userState');
    if (mySanya) {
      const outSession = JSON.parse(mySanya);
      this.authPair = outSession.authPair || '';
      // this.user = outSession.user || '';
      this.isUserLoggedIn = outSession.isUserLoggedIn || '';
      if (this.isUserLoggedIn) {
        console.log('User authenticated, redirecting...');
        //this.router.navigate(['feed']);
      } else {
        console.log('Please, log in');
      }
      /* if (this.authPair!=''){
       if (this.authPair!=null){
       if (this.authPair.first==200){
       this.router.navigate(['/orders'])
       }
       }
       }*/
    }
  };

  // setUserLoggedIn(status: boolean) {
  //   this.isUserLoggedIn = status;
  // }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  /*getUser() {
    return this.user;
  }*/

  /*getUserType() {
    return this.user.role;
  }*/

  signIn(authPair: Pair) {
    // this.user = user;
    this.authPair = authPair;
    this.isUserLoggedIn = true;
    localStorage.setItem('userState', JSON.stringify({isUserLoggedIn: this.isUserLoggedIn, authPair: authPair}));
  }

  public auth(phone: string, password: string) {
    return this.http.post(`${this.loginUrl}`, {email: phone, password: password})
      .map(response => {
        let authPair: Pair = new Pair();
        authPair.setFirst(response.status);
        if (authPair.first == 200)
          authPair.setSecond(response.json().token);
        return authPair;
      }).catch(this._errorHandler);
  }

  public login(authPair: Pair, phone: string, password: string) {
    this.setAuthPair(authPair);
    return this.http.post(`${this.loginUrl}`, {email: phone, password: password})
      .map(response =>
        response.json()
      )
      .map(response => {
        /*console.log(response);*/
        return response;
      }).catch(this._errorHandler);
  }

  _errorHandler(error: Response) {
    console.error(JSON.parse(JSON.stringify(error.json())));
    let obj = JSON.parse(JSON.stringify(error.json()));
    return Observable.throw(obj.message);
  }

  logout(): void {
    console.log('LOGOUT');
    this.isUserLoggedIn = false;
    this.token = null;
    this.status = 0;
    this.authPair = null;
    // this.user = null;
    localStorage.setItem('userState', JSON.stringify({isUserLoggedIn: this.isUserLoggedIn, authPair: this.authPair}));
    localStorage.clear();
    this.router.navigate(['/']);
  }

  getToken(): string {
    return this.authPair.second;
  }

  getStatus(): number {
    return this.authPair.first;
  }

  setAuthPair(authPair: Pair) {
    this.authPair = authPair;
  }
}
