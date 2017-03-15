import {Component} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserValidators} from "./user.validators";
import {FormComponent} from "./formcomponent";
@Component({
  templateUrl: '/app/useradd.component.html'
})
export class UserAddComponent implements FormComponent {
  frm: FormGroup;

  constructor(fb: FormBuilder) {
    this.frm = fb.group({
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
