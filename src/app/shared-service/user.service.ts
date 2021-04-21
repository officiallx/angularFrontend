import { Injectable } from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {ApplicationUser} from '../models/user';
import { Observable } from 'rxjs';



@Injectable()
export class UserService {
  public baseUrl:string='https://e-catering.herokuapp.com/api';
  public headers = new HttpHeaders({'Content-Type':'application/json'});
  public options = {headers:this.headers};
  public user = new ApplicationUser();
  constructor(public httpClient:HttpClient) { }

  getUsers(){

    return this.httpClient.get(this.baseUrl+'/users');
  }

  getUser(id:number){

    return this.httpClient.get(this.baseUrl+'/user'+id);
  }
  deleteUser(id:number){

    return this.httpClient.delete(this.baseUrl+'/user/'+id);
  }


  createUser(user:ApplicationUser){

    return this.httpClient.post(this.baseUrl+'/user',JSON.stringify(user), this.options);
  }

   updateUser(user:ApplicationUser){

    return this.httpClient.post(this.baseUrl+'/user',JSON.stringify(user), this.options);
  }

  errorHandler(error:Response){

    return Observable.throw(error||"SERVER ERROR");
 }

   setter(user:ApplicationUser){
     this.user=user;
   }

  getter(){
    return this.user;
  }
}
