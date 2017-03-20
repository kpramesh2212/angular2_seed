import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./notfound.component";

export const RootRoute = RouterModule.forRoot([
  {path: "", component: HomeComponent },
  {path: "not-found", component: NotFoundComponent},
  {path: "**", redirectTo: ""}
]);
