import { Component } from '@angular/core';
import { TweetService } from './tweet.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <change-password-form></change-password-form>
    `,
})
export class AppComponent  {
  name = 'Angular';
  tweets: Object[];

  constructor(tweetService: TweetService) {
    this.tweets = tweetService.getTweets();
  }

}
