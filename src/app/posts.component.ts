import {Component, OnInit} from "@angular/core";
import {PostService} from "./post.service";
import {Post} from "./post";
import 'rxjs/add/operator/delay';

@Component({
  templateUrl: '/app/posts.component.html',
  styles: [`
    
    ul.list-group li.list-group-item:hover {
      background: #f5f5f5;
    }
    
    .selected {
      background: #f5f5f5;
    }
  
  `]
})
export class PostsComponent implements OnInit {
  posts : Post[];
  selectedPost: Post;
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

  onClick(post: Post) {
    this.selectedPost = post;
  }

}
