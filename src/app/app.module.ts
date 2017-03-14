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


@NgModule({
  imports: [
    BrowserModule,
    RootRoute,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
