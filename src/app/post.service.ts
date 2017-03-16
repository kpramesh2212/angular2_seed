
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Post} from "./post";

@Injectable()
export class PostService {
  private _baseUrl = "http://jsonplaceholder.typicode.com/posts";

  constructor(private _http: Http) {

  }

  getPosts(): Observable<Post[]> {
    return this._http.get(this._baseUrl).map(res => res.json());
  }


}
