import {NgModule} from "@angular/core";
import {UsersComponent} from "./users.component";
import {UserAddComponent} from "./useradd.component";
import {UserService} from "./users.service";
import {CommonModule} from "@angular/common";
import {HttpModule, JsonpModule} from "@angular/http";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    UsersComponent,
    UserAddComponent
  ],
  providers: [
    UserService
  ],
  exports: [
  ]
})
export class UsersModule {

}
