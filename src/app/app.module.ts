import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {NavBarComponent} from './navbar.component';
import {HomeComponent} from "./home.component";
import {UsersComponent} from "./users.component";
import {PostsComponent} from "./posts.component";
import {RootRoute} from "./app.routing";
import {HttpModule, JsonpModule} from "@angular/http";
import {UserService} from "./users.service";
import {UserAddComponent} from "./useradd.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavGuard} from "./nav-guard.service";
import {NotFoundComponent} from "./notfound.component";
import {PostService} from "./post.service";
import {SpinnerComponent} from "./spinner.component";
import {PaginationComponent} from "./pagination.component";


@NgModule({
  imports: [
    BrowserModule,
    RootRoute,
    HttpModule,
    JsonpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    UserAddComponent,
    NotFoundComponent,
    SpinnerComponent,
    PaginationComponent
  ],
  providers: [
    UserService,
    NavGuard,
    PostService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
