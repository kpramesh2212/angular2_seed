import {Component} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserValidators} from "./user.validators";
import {FormComponent} from "./formcomponent";
import {UserService} from "./users.service";
import {User} from "./user";
import { Router } from "@angular/router";

@Component({
  templateUrl: '/app/useradd.component.html'
})
export class UserAddComponent implements FormComponent {
  frm: FormGroup;
  private _responseUser: User;

  constructor(private _fb: FormBuilder,
              private _userService: UserService,
              private _router: Router) {
    this.frm = _fb.group({
      nameControl: ['', [Validators.required]],
      emailControl: ['', [Validators.required, UserValidators.validEmail]],
      phoneControl: [],
      streetControl: [],
      suiteControl: [],
      cityControl: [],
      zipControl: []
    })
  }

  userAdd() {
    var user: User = {
      name:  this.frm.controls['nameControl'].value,
      email: this.frm.controls['emailControl'].value
    };
    this._userService.addUser(user).subscribe((x: User) => {
      alert("User " + x.name + " has been created successfully with id : " + x.id);
      this.frm.markAsPristine();
      this._router.navigate(['users']);
    });
  }


}
