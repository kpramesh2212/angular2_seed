import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { GitUser } from './gituser';

@Injectable()
export class GitService {

  constructor(private _http: Http) {

  }

  getUsersAndFollowers(user: string) : Observable<[GitUser, GitUser[]]> {
    var userUrl = "https://api.github.com/users/" + user
    return Observable.forkJoin(this._http.get(userUrl),
                     this._http.get(userUrl + '/followers'))
                     .map(x => [x[0].json(), x[1].json()]);
  }


}
