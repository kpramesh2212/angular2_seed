import {Component, OnInit} from "@angular/core";
import {PostService} from "./post.service";
import {Post} from "./post";

@Component({
  templateUrl: '/app/posts.component.html'
})
export class PostsComponent implements OnInit {
  posts : Post[];

  constructor(
    private _ps: PostService
  ) {

  }

  ngOnInit() {
    this._ps.getPosts().subscribe(posts => this.posts = posts);
  }



}
