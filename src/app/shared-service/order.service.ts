import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import { Orders } from '../models/orders';
import {environment} from '../../environments/environment.prod';



@Injectable()
export class OrderService {
  public baseUrl = environment.baseUrl;
  public headers = new HttpHeaders({'Content-Type':'application/json'});
  public options = {headers:this.headers};
  public order = new Orders();
  constructor(public httpClient:HttpClient) { }

  getOrders(){

    return this.httpClient.get(this.baseUrl+'/order');
  }

  getOrder(orderId:number){

    return this.httpClient.get(this.baseUrl+'/order'+orderId);
  }
  deleteOrder(orderId:number){

    return this.httpClient.delete(this.baseUrl+'/order/'+orderId);
  }


  createOrder(order:Orders){

    return this.httpClient.post(this.baseUrl+'/order',JSON.stringify(order), this.options);
  }

   updateEvent(order:Orders){

    return this.httpClient.put(this.baseUrl+'/order',JSON.stringify(order), this.options);
  }

  errorHandler(error:Response){

    return Observable.throw(error||"SERVER ERROR");
 }

   setter(order:Orders){
     this.order=order;
   }

  getter(){
    return this.order;
  }
}
