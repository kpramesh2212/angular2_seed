import {Component, OnInit} from "@angular/core";
import {UserService} from "./users.service";
import {User} from "./user";

@Component({
  template: `
    <h1>Users</h1>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Edit</th>
        <th>Delete</th>
       </tr>
      </thead>
      <tr *ngFor="let user of users">
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
        <td><i class="glyphicon glyphicon-edit"></i></td>
        <td><i class="glyphicon glyphicon-remove"></i></td>
      </tr>
    </table>
  `
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
