import {RouterModule} from "@angular/router";
import {UsersComponent} from "./users.component";
import {HomeComponent} from "./home.component";
import {PostsComponent} from "./posts.component";
import {UserAddComponent} from "./useradd.component";
import {NavGuard} from "./nav-guard.service";

export const RootRoute = RouterModule.forRoot([
  {path: "", component: HomeComponent },
  {path: "users", component: UsersComponent },
  {path: "users/new", component: UserAddComponent, canDeactivate: [ NavGuard ]},
  {path: "posts", component: PostsComponent },
  {path: "**", redirectTo: ""}
]);
