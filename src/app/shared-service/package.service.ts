import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Package } from '../models/package';
import { Observable } from 'rxjs';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private baseUrl = 'https://e-catering.herokuapp.com/api';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private options = {headers: this.headers};
  private package = new Package();
  constructor(private httpClient: HttpClient, private eventsService: EventsService) { }

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
