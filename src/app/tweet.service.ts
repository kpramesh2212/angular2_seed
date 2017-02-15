import { Injectable } from '@angular/core';

@Injectable()
export class TweetService {

  getTweets() {

    return [{
      "imageUrl": "http://lorempixel.com/100/100/people?1",
      "author": "PeopleWorld",
      "handler": "@lion123",
      "description": "This is how people have changed over time.",
      "totalLikes": "272",
      "isLiked": false
    },
    {
      "imageUrl": "http://lorempixel.com/100/100/people?2",
      "author": "WaterWorld",
      "handler": "@WHO",
      "description": "Water is essential element.",
      "totalLikes": "375",
      "isLiked": true
    },
    {
      "imageUrl": "http://lorempixel.com/100/100/people?3",
      "author": "AngularAndBootstrap",
      "handler": "@angularTeam",
      "description": "Do you know how to use Angular and Bootstrap?",
      "totalLikes": "649",
      "isLiked": true
    },
    {
      "imageUrl": "http://lorempixel.com/100/100/people?4",
      "author": "CreativeHead",
      "handler": "@AdobeCreator",
      "description": "What is Creative cloud software?",
      "totalLikes": "81",
      "isLiked": false
    }];


  }


}
