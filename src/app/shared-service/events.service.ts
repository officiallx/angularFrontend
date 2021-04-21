import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import { Event } from '../models/event';



@Injectable()
export class EventsService {
  public baseUrl:string ='https://e-catering.herokuapp.com/api';
  public headers = new HttpHeaders({'Content-Type':'application/json'});
  public options = {headers:this.headers};
  public event = new Event();
  constructor(public httpClient:HttpClient) { }

  getEvents(){

    return this.httpClient.get(this.baseUrl+'/events');
  }

  getEvent(eventId:number){

    return this.httpClient.get(this.baseUrl+'/event'+eventId);
  }
  deleteEvent(eventId:number){

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
