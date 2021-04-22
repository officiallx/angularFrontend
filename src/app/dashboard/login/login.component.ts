import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationUser } from 'src/app/models/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared-service/user.service';
import {environment} from '../../../environments/environment.prod';

// @ts-ignore
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public share: any;
  public user: ApplicationUser = new ApplicationUser();
  public loginUri = environment.loginURL;
  public headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': this.loginUri + 'login',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
  });
  private options = {headers: this.headers};
   constructor(public http: HttpClient, public _router: Router, public userService: UserService) { }

  ngOnInit() {
  }

  processForm() {
    console.log(this.user);
    this.http.post(this.loginUri + 'login', this.user, this.options).subscribe( re => {

      this.share = re;
      console.log(this.share);
      this._router.navigate(['/dashboard']);
    });
   }



}
