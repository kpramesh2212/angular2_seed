
import {RouterModule} from "@angular/router";
import {UserAddComponent} from "./useradd.component";
import {UsersComponent} from "./users.component";
import {NavGuard} from "../shared/nav-guard.service";

export const UserRouting = RouterModule.forChild([
  {path: "users", component: UsersComponent },
  {path: "users/new", component: UserAddComponent, canDeactivate: [ NavGuard ]},
  {path: "users/:id", component: UserAddComponent}
]);
