import {Component} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserValidators} from "./user.validators";
@Component({
  templateUrl: '/app/useradd.component.html'
})
export class UserAddComponent {
  addUserForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.addUserForm = fb.group({
      nameControl: ['', [Validators.required]],
      emailControl: ['', [Validators.required, UserValidators.validEmail]],
      phoneControl: [],
      streetControl: [],
      suiteControl: [],
      cityControl: [],
      zipControl: []
    })
  }

}
