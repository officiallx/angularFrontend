import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Lunch } from '../models/lunch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LunchService {

  private baseUrl:string='http://localhost:8080/api';
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  private options = {headers:this.headers};
  private lunch = new Lunch();
  constructor(private httpClient:HttpClient) { }

  getAllLunches(){

    return this.httpClient.get(this.baseUrl+'/lunch');
  }

  getLunch(lunchId:Number){

    return this.httpClient.get(this.baseUrl+'/lunch'+lunchId);
  }
  deleteLunch(lunchId:Number){

    return this.httpClient.delete(this.baseUrl+'/lunch/'+lunchId);
  }


  createLunch(lunch:Lunch){

    return this.httpClient.post(this.baseUrl+'/lunch',JSON.stringify(lunch), this.options);
  }
   
   updateLunch(lunch:Lunch){

    return this.httpClient.post(this.baseUrl+'/lunch',JSON.stringify(lunch), this.options);
  }

  errorHandler(error:Response){

    return Observable.throw(error||"SERVER ERROR");
 }

   setter(lunch:Lunch){
     this.lunch=lunch;
   }

  getter(){
    return this.lunch;
  }
}
