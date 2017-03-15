import {Injectable} from "@angular/core";
import {User} from "./user";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/observable";

@Injectable()
export class UserService {

  constructor(private _http: Http) {
  }

  getUsers(): Observable<User[]> {
    return this._http.get("http://jsonplaceholder.typicode.com/users")
        .map(response => response.json());
  }

  addUser(body: User) {
    return this._http.post("http://jsonplaceholder.typicode.com/users", body)
      .map(res => res.json());
  }

}
