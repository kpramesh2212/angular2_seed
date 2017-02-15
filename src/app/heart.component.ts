import { Component, Input } from '@angular/core';

@Component({
  selector: 'heart',
  template: `
    <i class="init glyphicon glyphicon-heart" [class.liked]="isLiked" (click)="whenLiked()">
    </i><span> {{totalLikes}}</span>
  `,
  styles: [`
    .init {
      color: #ccc;
      cursor: pointer;
    }
    .liked {
      color: deeppink;
    }
    `]
})
export class HeartComponent {
  @Input() isLiked = false;
  @Input() totalLikes = 10;

  whenLiked() {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.totalLikes++;
    } else {
      this.totalLikes--;
    }
  }

}
