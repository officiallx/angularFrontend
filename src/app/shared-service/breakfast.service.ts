import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Breakfast } from '../models/breakfast';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BreakfastService {

  public baseUrl = environment.baseUrl;
  public headers = new HttpHeaders({'Content-Type':'application/json'});
  public options = {headers:this.headers};
  public breakfast = new Breakfast();
  constructor(public httpClient:HttpClient) { }

  getAllBreakfast(){

    return this.httpClient.get(this.baseUrl+'/breakfasts');
  }

  getBreakfast(breakfastId:Number){

    return this.httpClient.get(this.baseUrl+'/breakfast'+breakfastId);
  }

  deleteBreakfast(packageId:Number){
    return this.httpClient.get(this.baseUrl+'/breakfast/'+packageId);
  }


  createBreakfast(breakfast:Breakfast){

    return this.httpClient.post(this.baseUrl+'/breakfast',JSON.stringify(breakfast), this.options);
  }

   updateBreakfast(breakfast:Breakfast){

    return this.httpClient.post(this.baseUrl+'/breakfast',JSON.stringify(breakfast), this.options);
  }

  errorHandler(error:Response){

    return Observable.throw(error||"SERVER ERROR");
 }

   setter(breakfast:Breakfast){
     this.breakfast=breakfast;
   }

  getter(){
    return this.breakfast;
  }
}
