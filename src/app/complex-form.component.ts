import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'complex-form',
  templateUrl: './app/complex-form.component.html'
})
export class ComplexFormComponent {
  form :FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  whenFormSubmitted() {
    console.log(this.form);
  }

}
