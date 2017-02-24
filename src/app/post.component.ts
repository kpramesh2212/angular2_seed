import { Component } from '@angular/core';
import { PostService } from './post.service';
import 'rxjs/add/operator/mergeMap';
import { OnInit } from '@angular/core';
import 'rxjs/add/operator/delay'

@Component({
  selector: 'post',
  template: `
    <div>Post</div>
    <div *ngIf="isLoading">
      <i class="fa fa-spinner fa-pulse fa-3x" aria-hidden="true"></i>
    </div>
  `
})
export class PostComponent implements OnInit {
  isLoading = true;

  ngOnInit() {
    console.log('init');
    this._postService.getPosts().delay(5000).subscribe(post => {
      console.log(post)
      this.isLoading = false;
    });
  }

  constructor(private _postService: PostService) {
  }
}
