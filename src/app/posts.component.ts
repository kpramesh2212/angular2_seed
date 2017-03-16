import {Component, OnInit} from "@angular/core";
import {PostService} from "./post.service";
import {Post} from "./post";
import 'rxjs/add/operator/delay';

@Component({
  templateUrl: '/app/posts.component.html'
})
export class PostsComponent implements OnInit {
  posts : Post[];
  isLoading = true;

  constructor(
    private _ps: PostService
  ) {

  }

  ngOnInit() {
    this._ps.getPosts().delay(2000).subscribe(posts => {
      this.posts = posts;
      this.isLoading = false;
    });
  }



}
