import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Lunch } from '../models/lunch';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LunchService {

  public baseUrl = environment.baseUrl;
  public headers = new HttpHeaders({'Content-Type':'application/json'});
  public options = {headers:this.headers};
  public lunch = new Lunch();
  constructor(public httpClient:HttpClient) { }

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
