import {RouterModule} from "@angular/router";
import {UserAddComponent} from "./useradd.component";
import {UsersComponent} from "./users.component";
import {NavGuard} from "../nav-guard.service";

export const UserRoute = RouterModule.forChild([
  {path: "users", component: UsersComponent },
  {path: "users/new", component: UserAddComponent, canDeactivate: [ NavGuard ]},
  {path: "users/:id", component: UserAddComponent}
]);
