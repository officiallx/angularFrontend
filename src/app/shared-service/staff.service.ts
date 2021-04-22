import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Staff } from '../models/staff';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  public baseUrl = environment.baseUrl;
  public headers = new HttpHeaders({'Content-Type':'application/json'});
  public options = {headers:this.headers};
  public staff = new Staff();
  constructor(public httpClient:HttpClient) { }

  getAllStaff(){

    return this.httpClient.get(this.baseUrl+'/staffs');
  }



  getStaff(staffId:Number){

    return this.httpClient.get(this.baseUrl+'/staff'+staffId);
  }

  deleteStaff(staffId:Number){

    return this.httpClient.delete(this.baseUrl+'/staff/'+staffId);
  }


  createStaff(staff:Staff){

    return this.httpClient.post(this.baseUrl+'/staff',JSON.stringify(staff), this.options);
  }

   updateStaff(staff:Staff){

    return this.httpClient.post(this.baseUrl+'/staff',JSON.stringify(staff), this.options);
  }

  errorHandler(error:Response){

    return Observable.throw(error||"SERVER ERROR");
 }

   setter(staff:Staff){
     this.staff=staff;
   }

  getter(){
    return this.staff;
  }


}
