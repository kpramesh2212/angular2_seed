import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'change-password-form',
  templateUrl: './app/html/change-password-form.component.html'
})
export class ChangePasswordFormComponent {
  pf: FormGroup;

  constructor(fb: FormBuilder){
    this.pf = fb.group({
      cp: ['', Validators.required],
      np: ['', [Validators.required, Validators.minLength(5)]],
      cnfp: ['', [Validators.required]]
    }, {validator: PasswordValidators.newPasswordMatchConfirmPassword});
  }

  onSubmit() {
    let cp = this.pf.controls['cp'];
    if (cp.value === '1234') {
      alert('password changed successfully');
    } else {
      cp.setErrors({invalidOldPassword: true});
    }
    console.log(this.pf)
  }

}
