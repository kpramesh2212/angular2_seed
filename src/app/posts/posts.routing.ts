import {RouterModule} from "@angular/router";
import {PostsComponent} from "./posts.component";

export const PostsRoute = RouterModule.forChild([
  {path: "posts", component: PostsComponent }
]);
