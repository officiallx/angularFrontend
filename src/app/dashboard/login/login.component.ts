import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationUser } from 'src/app/models/user';
import { Router } from '@angular/router';
import { Options } from 'selenium-webdriver/chrome';
import { UserService } from 'src/app/shared-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private share: any;
  private user: ApplicationUser = new ApplicationUser();
  private headers = new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT'
  });
  private options = {headers:this.headers};
   constructor(private http: HttpClient, private _router: Router, private userService: UserService) { }
  

  ngOnInit() {
  }

  processForm(){
    console.log(this.user);
    this.http.post("http://localhost:8080/login",this.user).subscribe( re => {
      
      this.share = re;
      console.log(this.share);
      this._router.navigate(['/dashboard']);
    })
   }

}
