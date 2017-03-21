import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {NavBarComponent} from './navbar.component';
import {HomeComponent} from "./home.component";
import {RootRoute} from "./app.routing";
import {NotFoundComponent} from "./notfound.component";
import {PostsModule} from "./posts/posts.module";
import {UsersModule} from "./users/users.module";
import {PostRouting} from "./posts/posts.routing";
import {UserRouting} from "./users/users.routing";

@NgModule({
  imports: [
    BrowserModule,
    PostsModule,
    UsersModule,
    PostRouting,
    UserRouting,
    RootRoute
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
