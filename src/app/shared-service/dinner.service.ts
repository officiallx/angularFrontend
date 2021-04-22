import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Dinner } from '../models/dinner';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DinnerService {

  public baseUrl = environment.baseUrl;
  public headers = new HttpHeaders({'Content-Type':'application/json'});
  public options = {headers:this.headers};
  public dinner = new Dinner();
  constructor(public httpClient:HttpClient) { }

  getAllDinners(){

    return this.httpClient.get(this.baseUrl+'/dinner');
  }

  getDinner(dinnerId:Number){

    return this.httpClient.get(this.baseUrl+'/dinner'+dinnerId);
  }
  deleteDinner(dinnerId:Number){

    return this.httpClient.delete(this.baseUrl+'/dinner/'+dinnerId);
  }


  createDinner(dinner:Dinner){

    return this.httpClient.post(this.baseUrl+'/dinner',JSON.stringify(dinner), this.options);
  }

   updateDinner(dinner:Dinner){

    return this.httpClient.post(this.baseUrl+'/dinner',JSON.stringify(dinner), this.options);
  }

  errorHandler(error:Response){

    return Observable.throw(error||"SERVER ERROR");
 }

   setter(dinner:Dinner){
     this.dinner=dinner;
   }

  getter(){
    return this.dinner;
  }
}
