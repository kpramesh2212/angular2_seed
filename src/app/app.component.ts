import { Component } from '@angular/core';
import { TweetService } from './tweet.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <heart></heart>
    <div *ngFor="let t of tweets">
      <tweet
        [imageUrl]="t.imageUrl"
        [author]="t.author"
        [handler]="t.handler"
        [description]="t.description"
        [totalLikes]="t.totalLikes"
        [isLiked]="t.isLiked"
      ></tweet><br>
    </div><br>
    <templatedemo></templatedemo>
    <zippy>Content of who can see my stuff</zippy>
    <zippy>Content of who can see my stuff</zippy>
    `,
})
export class AppComponent  {
  name = 'Angular';
  tweets: Object[];

  constructor(tweetService: TweetService) {
    this.tweets = tweetService.getTweets();
  }

}
