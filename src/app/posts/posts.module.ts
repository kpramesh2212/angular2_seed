import {NgModule} from "@angular/core";
import {PostService} from "./post.service";
import {PostsComponent} from "./posts.component";
import {CommonModule} from "@angular/common";
import {HttpModule, JsonpModule} from "@angular/http";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule,
    SharedModule
  ],
  declarations: [
    PostsComponent
  ],
  exports: [

  ],
  providers: [
    PostService
  ]
})
export class PostsModule {

}
