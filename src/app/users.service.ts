import {Injectable} from "@angular/core";
import {User} from "./user";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/observable";

@Injectable()
export class UserService {
  private _baseUrl = "http://jsonplaceholder.typicode.com/users";

  constructor(private _http: Http) {
  }

  getUsers(): Observable<User[]> {
    return this._http.get(this._baseUrl)
        .map(response => response.json());
  }

  getUser(id: number): Observable<User> {
    return this._http.get(this._baseUrl + "/" + id)
               .map(response => response.json());
  }

  addUser(body: User) {
    return this._http.post(this._baseUrl, body)
      .map(res => res.json());
  }

}
