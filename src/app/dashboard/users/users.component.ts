import { Component, OnInit } from '@angular/core';
import {ApplicationUser } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../shared-service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  showSpinner: boolean = true;

  private users: ApplicationUser[];
  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
    this._userService.getUsers().subscribe((users: ApplicationUser[]) => {
      console.log(users);
      this.users = users;
      this.showSpinner=false;
    }, (error: any) => {
      console.log(error);
    })
  }

  deleteUser(user: ApplicationUser) {
    this._userService.deleteUser(user.id).subscribe((data) => {
      this.users.splice(this.users.indexOf(user), 1);
    }, (error: any) => {
      console.log(error);
    });
  }

  updateUser(user: ApplicationUser) {
    this._userService.setter(user);
    this._router.navigate(['/add-user']);

  }
  
  newUser() {
    let user = new ApplicationUser();
    this._userService.setter(user);
    this._router.navigate(['/add-user']);
  }

}
