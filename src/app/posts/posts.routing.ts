import {RouterModule} from "@angular/router";
import {PostsComponent} from "./posts.component";

export const PostRouting = RouterModule.forChild([
  {path: "posts", component: PostsComponent },
]);

