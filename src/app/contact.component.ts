import {Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericFormComponent } from './generic-form.component';

@Component({
    templateUrl: '/app/html/contact.component.html'
})
export class ContactComponent implements GenericFormComponent {
  form :FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    comment: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

    constructor(private _router: Router) {

    }

    onSubmit(form: FormGroup){
        console.log(form);
        this._router.navigate(['albums']);
    }
}
