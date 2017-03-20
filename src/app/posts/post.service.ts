
import {Injectable, Type} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Post} from "./post";

@Injectable()
export class PostService {
  private _baseUrl = "http://jsonplaceholder.typicode.com/posts";
  constructor(private _http: Http) {

  }

  getPosts(filter?: {userId: number}): Observable<Post[]> {
    var url = this._baseUrl;
    if (filter && filter.userId) {
      url += "?userId=" + filter.userId;
    }
    return this._http.get(url).map(res => res.json());
  }

  getComments(postId: number) {
    return this._http.get(this._baseUrl + "/" + postId + "/comments").map(res => res.json());
  }

}
