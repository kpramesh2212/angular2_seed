import {CanDeactivate} from "@angular/router";
import {FormComponent} from "./formcomponent";
import {Injectable} from "@angular/core";

@Injectable()
export class NavGuard implements CanDeactivate<FormComponent> {

  canDeactivate(component: FormComponent) {
    if (component.frm.dirty) {
      return confirm("The page contains unsaved data. Are you sure you want to navigate away?");
    }
    return true;
  }

}
