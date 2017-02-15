import { Component, Input } from '@angular/core';

@Component({
  selector: 'tweet',
  template: `
  <div class="media">
    <div class="media-left">
      <a href="#">
        <img class="media-object" [src]="imageUrl" [alt]="imageUrl">
      </a>
    </div>
    <div class="media-body">
      <h4 class="media-heading">{{author}}<span class="greycol"> {{handler}}</span></h4>
      {{description}}<br>
      <heart [isLiked]="isLiked" [totalLikes]="totalLikes"></heart>
    </div>
  </div>
  `,
  styles: [`
    .greycol {
      color: #ccc;
    }

    `]
})
export class TweetComponent {
  @Input() imageUrl = "http://lorempixel.com/100/100/people/";
  @Input() author = "People";
  @Input() handler = "@PeopleWorld";
  @Input() description = "This is how people have changed over times.";
  @Input() totalLikes = 15;
  @Input() isLiked = false;
}
