import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserValidators} from "./user.validators";
import {FormComponent} from "./formcomponent";
import {UserService} from "./users.service";
import { User } from "./user";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: '/app/useradd.component.html'
})
export class UserAddComponent implements FormComponent, OnInit {
  frm: FormGroup;
  title: string = "Add User";
  user: User;

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.frm = _fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, UserValidators.validEmail]],
      phone: [],
      address: _fb.group ({
        street: [],
        suite: [],
        city: [],
        zipcode: []})
    });
    this.user = new User();
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(param => {
      var id = +param["id"];
      if (id != undefined && !isNaN(id)) {
        this.title = "Edit User";
        this._userService.getUser(id)
                          .subscribe(x => {
                            this.user = x;
                          }, err => {
                            this._router.navigate(['not-found']);
                          });
      }
    });
  }

  userAdd() {
    this._userService.addUser(this.frm.value).subscribe((x: User) => {
      alert("User " + x.name + " has been created successfully with id : " + x.id);
      this.frm.markAsPristine();
      this._router.navigate(['users']);
    });
  }


}
