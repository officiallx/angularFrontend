import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Staff } from '../models/staff';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private baseUrl:string='https://e-catering.herokuapp.com/api';
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  private options = {headers:this.headers};
  private staff = new Staff();
  constructor(private httpClient:HttpClient) { }

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
