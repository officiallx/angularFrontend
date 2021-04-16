import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Position } from '../models/position';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private baseUrl:string='https://e-catering.herokuapp.com/api';
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  private options = {headers:this.headers};
  private position = new Position();
  constructor(private httpClient:HttpClient) { }

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
