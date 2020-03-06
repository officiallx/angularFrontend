import { Injectable } from '@angular/core';
import{HttpResponse} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import { Address } from '../models/address';



@Injectable()
export class AddressService {
  private baseUrl:string='http://e-catering.herokuapp.com/api';
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  private options = {headers:this.headers};
  private address = new Address();
  constructor(private httpClient:HttpClient) { }

  getAllAddress(){
    return this.httpClient.get(this.baseUrl+'/address');
  }

  getAddress(aId:Number){

    return this.httpClient.get(this.baseUrl+'/address'+aId);
  }
  deleteAddress(aId:Number){

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
