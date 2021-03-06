import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Package } from '../models/package';
import { Observable } from 'rxjs';
import { EventsService } from './events.service';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  public baseUrl = environment.baseUrl;
  public headers = new HttpHeaders({'Content-Type': 'application/json'});
  public options = {headers: this.headers};
  public package = new Package();
  constructor(public httpClient: HttpClient, private eventsService: EventsService) { }

  getAll() {
    return this.httpClient.get(this.baseUrl + '/event/getAll');
  }

  getPackages(eventId: Number) {

    return this.httpClient.get(this.baseUrl + '/event/' + eventId + '/packages');
  }

  getPackage(eventId: Number, packageId: Number) {

    return this.httpClient.get(this.baseUrl + '/event' + eventId + '/package' + packageId);
  }

  deletePackage(packageId: Number) {
    const eventId = this.eventsService.getter().eventId;
    return this.httpClient.delete(this.baseUrl + '/event/' + eventId + '/package/' + packageId);
  }


  createPackage(apackage: Package) {
    const eventId = this.eventsService.getter().eventId;
    return this.httpClient.post(this.baseUrl + '/event/' + eventId + '/package', JSON.stringify(apackage), this.options);
  }

   updatePackage(apackage: Package) {
    const eventId = this.eventsService.getter().eventId;
    return this.httpClient.post(this.baseUrl + '/event/' + eventId + '/package', JSON.stringify(apackage), this.options);
  }

  errorHandler(error: Response) {

    return Observable.throw(error || 'SERVER ERROR');
 }

   setter(apackage: Package) {
     this.package = apackage;
   }

  getter() {
    return this.package;
  }
}
