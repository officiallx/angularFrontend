import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Position } from '../models/position';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  public baseUrl = environment.baseUrl;
  public headers = new HttpHeaders({'Content-Type':'application/json'});
  public options = {headers:this.headers};
  public position = new Position();
  constructor(public httpClient:HttpClient) { }

  getPositions(){

    return this.httpClient.get(this.baseUrl+'/position');
  }

  getPosition(pId:Number){

    return this.httpClient.get(this.baseUrl+'/position'+pId);
  }

  deletePosition(pId:Number){

    return this.httpClient.delete(this.baseUrl+'/position/'+pId);
  }


  createPosition(position:Position){

    return this.httpClient.post(this.baseUrl+'/position',JSON.stringify(position), this.options);
  }

   updatePosition(position:Position){

    return this.httpClient.post(this.baseUrl+'/position',JSON.stringify(position), this.options);
  }

  errorHandler(error:Response){

    return Observable.throw(error||"SERVER ERROR");
 }

   setter(position:Position){
     this.position=position;
   }

  getter(){
    return this.position;
  }
}
