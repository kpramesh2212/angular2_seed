import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'cust-form-val',
  templateUrl: './app/html/custom-form-validation.component.html'
})
export class CustomFormValidationComponent {
  form :FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, UsernameValidators.containsSpace], UsernameValidators.unique),
    password: new FormControl('', [Validators.required])
  });

  onSubmit() {
    console.log(this.form);
  }

}
