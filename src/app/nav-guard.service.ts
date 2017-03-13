import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { GenericFormComponent } from './generic-form.component';

@Injectable()
export class NavGuard implements CanDeactivate<GenericFormComponent> {

  canDeactivate(component: GenericFormComponent): boolean {
    if (component.form.dirty) {
      return confirm("Are you sure");
    }
    return true;
  }

}
