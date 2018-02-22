import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {AuthService} from "./auth.service";
import {PostIdea} from "../models/postIdea.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class IdeaService {

  options: RequestOptions;
  ideaUrl = 'http://localhost:8090/ideas/';

  constructor(private http: Http, private authService: AuthService) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'IdeaFixToken ' + this.authService.getToken());
    this.options = new RequestOptions({headers: headers});
  };

  createIdea(idea: PostIdea) {
    return this.http.post(`${this.ideaUrl}`, idea, this.options)
      .map(response => response.json())
      .catch(this._errorHandler);
  }

  public getIdeasList() {
    return this.http.get(`${this.ideaUrl}`, this.options)
      .map(response => Array.of( response.json().data ))
  }


  /*Object.values(response.json())
*/
  _errorHandler(error: Response) {
    console.error(JSON.parse(JSON.stringify(error.json())));
    var obj = JSON.parse(JSON.stringify(error.json()));
    return Observable.throw(obj.message);
  }

}
