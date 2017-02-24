import { Component, OnInit } from '@angular/core';
import { GitService } from './git.service';
import { GitUser } from './gituser';

@Component({
  selector: 'git-user',
  template: `
  <div *ngIf="!isLoading">
      <div>
        <span class="r">@{{user.login}}</span><br>
        <img class="avatar" [src]="user.avatar_url">
      </div><br>
      <span class="r">Followers</span>
      <div *ngFor="let user of followers">
        <div class="media">
          <div class="media-left">
            <a href="#">
              <img class="media-object avatar" [src]="user.avatar_url" alt="...">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">{{user.login}}</h4>
          </div>
        </div><br>
      <div>
   </div>
  `,
  styles: [`
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 100%;
    }
    .r {
      text-align: centre;
      font-size: 200%;
      font-weight: bold;
    }
  `]
})
export class GitUserComponent implements OnInit {
  user: GitUser;
  followers: GitUser[];
  isLoading = true;

  ngOnInit() {
    this._gitUserService.getUsersAndFollowers('octocat')
                        .subscribe( userProfile => {
                            this.user = userProfile[0];
                            this.followers = userProfile[1];
                            console.log(userProfile);
                            this.isLoading = false;
                        });
    // this.user = { login: 'octocat', avatar_url: 'http://lorempixel.com/400/200/people/?=1'};
    // this.followers = [{ login: 'ramesh', avatar_url: 'http://lorempixel.com/400/200/people/?=2'},
    //                   { login: 'bash', avatar_url: 'http://lorempixel.com/400/200/people/?=3'},
    //                   { login: 'vash', avatar_url: 'http://lorempixel.com/400/200/people/?=4'}];

  }


  constructor(private _gitUserService: GitService) {

  }

}
