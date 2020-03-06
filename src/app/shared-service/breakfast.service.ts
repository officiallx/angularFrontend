import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Breakfast } from '../models/breakfast';

@Injectable({
  providedIn: 'root'
})
export class BreakfastService {

  private baseUrl:string='http://e-catering.herokuapp.com/api';
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  private options = {headers:this.headers};
  private breakfast = new Breakfast();
  constructor(private httpClient:HttpClient) { }

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
