import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Dinner } from '../models/dinner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DinnerService {

  private baseUrl:string='https://e-catering.herokuapp.com/api';
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  private options = {headers:this.headers};
  private dinner = new Dinner();
  constructor(private httpClient:HttpClient) { }

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
