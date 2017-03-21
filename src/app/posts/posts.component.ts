import {Component, OnInit} from "@angular/core";
import {PostService} from "./post.service";
import {Post, Comment} from "./post";
import 'rxjs/add/operator/delay';
import {UserService} from "../users/users.service";
import {User} from "../users/user";

@Component({
  templateUrl: '/app/posts/posts.component.html',
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
        this.pagedPosts = this.getPostsForPage(1);
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
  }

  onPageChanged(event: { page: number}) {
    this.pagedPosts = [];
    this.selectedPost = null;
    this.pagedPosts = this.getPostsForPage(event.page);
  }

  private getPostsForPage(page: number) {
    var start = (page * this.pageSize) - this.pageSize;
    var end = (page * this.pageSize);
    return this.posts.slice(start, end);
  }
}
