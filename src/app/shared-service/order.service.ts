import { Injectable } from '@angular/core';
import{Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import { Orders } from '../models/orders';



@Injectable()
export class OrderService {
  private baseUrl:string='http://localhost:8080/api';
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  private options = {headers:this.headers};
  private order = new Orders();
  constructor(private httpClient:HttpClient) { }

  getOrders(){

    return this.httpClient.get(this.baseUrl+'/order');
  }

  getOrder(orderId:Number){

    return this.httpClient.get(this.baseUrl+'/order'+orderId);
  }
  deleteOrder(orderId:Number){

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