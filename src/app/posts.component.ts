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

  pageSize = 10;
  pagedPosts :Post[];

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

  private loadPosts(filter?: {userId: number}) {
    this.resetPost();
    this.postsLoading = true;
    this._ps.getPosts(filter).delay(1000).subscribe(posts => {
      this.posts = posts;

      if (posts.length > this.pageSize)
        this.pagedPosts = posts.slice(0, this.pageSize);
      else
        this.pagedPosts = posts;

      this.postsLoading = false;
    });
  }

  private loadCommentsForPost(postId: number) {
    this.selectedPost.comments = [];
    this.commentsLoading = true;
    this._ps.getComments(postId).delay(1000).subscribe(com => {
      this.selectedPost.comments = com;
      this.commentsLoading = false;
    })
  }

  private loadUsers() {
    this._us.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  private resetPost() {
    this.selectedPost = null;
    this.posts= [];
    this.pagedPosts = [];
  }

  onPageChanged(event: { page: number}) {
    var page = event.page;
    var start = (page * this.pageSize) - this.pageSize;
    var end = (page * this.pageSize)
    this.pagedPosts = this.posts.slice(start, end);
  }
}
