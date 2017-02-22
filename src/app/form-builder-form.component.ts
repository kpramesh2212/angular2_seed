import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-builder-form',
  templateUrl: './app/form-builder-form.component.html'
})
export class FormBuilderFormComponent {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

}
