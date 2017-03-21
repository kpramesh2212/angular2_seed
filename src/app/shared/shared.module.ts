import {NgModule} from "@angular/core";
import {SpinnerComponent} from "./spinner.component";
import {PaginationComponent} from "./pagination.component";
import {CommonModule} from "@angular/common";
import {NavGuard} from "./nav-guard.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SpinnerComponent,
    PaginationComponent
  ],
  providers: [
    NavGuard
  ],
  exports: [
    SpinnerComponent,
    PaginationComponent
  ]
})
export class SharedModule {

}
