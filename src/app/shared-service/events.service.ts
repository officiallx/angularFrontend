import { Injectable } from '@angular/core';
import{HttpResponse} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import { Event } from '../models/event';



@Injectable()
export class EventsService {
  private baseUrl:string ='https://e-catering.herokuapp.com/api';
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  private options = {headers:this.headers};
  private event = new Event();
  constructor(private httpClient:HttpClient) { }

  getEvents(){

    return this.httpClient.get(this.baseUrl+'/events');
  }

  getEvent(eventId:Number){

    return this.httpClient.get(this.baseUrl+'/event'+eventId);
  }
  deleteEvent(eventId:Number){

    return this.httpClient.delete(this.baseUrl+'/event/'+eventId);
  }


  createEvent(event:Event){

    return this.httpClient.post(this.baseUrl+'/event',JSON.stringify(event), this.options);
  }

   updateEvent(event:Event){

    return this.httpClient.put(this.baseUrl+'/event',JSON.stringify(event), this.options);
  }

  errorHandler(error:Response){

    return Observable.throw(error||"SERVER ERROR");
 }

   setter(event:Event){
     this.event=event;
   }

  getter(){
    return this.event;
  }
}
