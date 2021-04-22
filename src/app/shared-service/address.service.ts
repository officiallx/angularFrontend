import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import { Address } from '../models/address';
import {environment} from '../../environments/environment.prod';



@Injectable()
export class AddressService {
  public baseUrl = environment.baseUrl;
  public headers = new HttpHeaders({'Content-Type':'application/json'});
  public options = {headers:this.headers};
  public address = new Address();
  constructor(public httpClient:HttpClient) { }

  getAllAddress(){
    return this.httpClient.get(this.baseUrl+'/address');
  }

  getAddress(aId:number){

    return this.httpClient.get(this.baseUrl+'/address'+aId);
  }
  deleteAddress(aId:number){

    return this.httpClient.delete(this.baseUrl+'/address/'+aId);
  }


  createAddress(address:Address){

    return this.httpClient.post(this.baseUrl+'/address',JSON.stringify(address), this.options);
  }

   updateAddress(address:Address){

    return this.httpClient.post(this.baseUrl+'/address',JSON.stringify(address), this.options);
  }

  errorHandler(error:Response){

    return Observable.throw(error||"SERVER ERROR");
 }

   setter(address:Address){
     this.address=address;
   }

  getter(){
    return this.address;
  }
}
