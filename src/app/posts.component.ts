import {Component, OnInit} from "@angular/core";
import {PostService} from "./post.service";
import {Post, Comment} from "./post";
import 'rxjs/add/operator/delay';
import {UserService} from "./users.service";
import {User} from "./user";

@Component({
  templateUrl: '/app/posts.component.html',
  styles: [`
    
    ul.list-group li.list-group-item:hover {
      background: #f5f5f5;
    }
    
    .selected {
      background: #f5f5f5;
    }
    
    .rounded-img {
      border-radius: 100%;
    }
    
    .carot {
      background: url('/app/carot.png') no-repeat right;
      background-size: 100px 100px;
    }
  
  `]
})
export class PostsComponent implements OnInit {
  posts : Post[];
  users: User[];
  selectedPost: Post;
  postsLoading = true;
  commentsLoading = true;

  constructor(
    private _ps: PostService,
    private _us: UserService
  ) {

  }

  ngOnInit() {
    this.loadPosts();
    this.loadUsers();
  }

  onClick(post: Post) {
    this.selectedPost = post;
    this.loadCommentsForPost(post.id);
  }

  whenChanged(filter: {userId: number}) {
    this.loadPosts(filter);
  }

  loadPosts(filter?: {userId: number}) {
    this.resetPost();
    this.postsLoading = true;
    this._ps.getPosts(filter).delay(1000).subscribe(posts => {
      this.posts = posts;
      this.postsLoading = false;
    });
  }

  loadCommentsForPost(postId: number) {
    this.selectedPost.comments = [];
    this.commentsLoading = true;
    this._ps.getComments(postId).delay(1000).subscribe(com => {
      this.selectedPost.comments = com;
      this.commentsLoading = false;
    })
  }

  loadUsers() {
    this._us.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  resetPost() {
    this.selectedPost = "";
    this.posts=[];
  }
}
