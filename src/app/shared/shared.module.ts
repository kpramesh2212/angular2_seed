import {NgModule} from "@angular/core";
import {SpinnerComponent} from "./spinner.component";
import {PaginationComponent} from "./pagination.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SpinnerComponent,
    PaginationComponent
  ],
  exports: [
    SpinnerComponent,
    PaginationComponent
  ]
})
export class SharedModule {

}
