import {RouterModule} from "@angular/router";
import {UsersComponent} from "./users.component";
import {HomeComponent} from "./home.component";
import {PostsComponent} from "./posts.component";

export const RootRoute = RouterModule.forRoot([
  {path: "", component: HomeComponent },
  {path: "users", component: UsersComponent },
  {path: "posts", component: PostsComponent },
  {path: "**", redirectTo: ""}
]);
