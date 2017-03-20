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
    return this._http.get(this.getUserUrl(id))
               .map(response => response.json());
  }

  addUser(body: User) {
    return this._http.post(this._baseUrl, body)
      .map(res => res.json());
  }

  updateUser(body: User, id: number) {
    return this._http.put(this.getUserUrl(id), body)
      .map(res => res.json());
  }

  deleteUser(id: number) {
    return this._http.delete(this.getUserUrl(id)).map(res => res.json());
  }

  private getUserUrl(id: number) {
    return this._baseUrl + "/" + id;
  }

}
