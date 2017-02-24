import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from './post';

@Injectable()
export class PostService {
  private _url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private _http: Http) {

  }

  getPosts(): Observable<Post[]> {
    return this._http.get(this._url).map(res => res.json());
  }

  createPost(post: Post) {
    return this._http.post(this._url, post).map(res => res.json());
  }

}
