import {Component, OnInit} from "@angular/core";
import {UserService} from "./users.service";
import {User} from "./user";

@Component({
  templateUrl: '/app/users/users.component.html',
  styles: [`
     .pointer {
        cursor: pointer;
     }
  `]
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

  onDelete(user: User) {
    if (confirm("Are you sure you want to delete user " + user.name + "? ")) {
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);
      this._us.deleteUser(user.id).subscribe(null, err => {
        alert("Could'nt delete the user.");
        this.users.splice(index, 0, user);
      });
    }
  }

}
