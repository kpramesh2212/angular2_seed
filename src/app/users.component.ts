import {Component, OnInit} from "@angular/core";
import {UserService} from "./users.service";
import {User} from "./user";

@Component({
  templateUrl: '/app/users.component.html'
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private _us: UserService){
  }

  ngOnInit(): void {
      this._us.getUsers().subscribe(x => {
        this.users = x;
      })
  }

}
