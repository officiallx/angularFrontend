import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../models/event';
import { EventsService } from '../../shared-service/events.service';
import { HttpClient } from '@angular/common/http';
import { concat } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PackagesComponent } from '../packages/packages.component';
import {environment} from '../../../environments/environment.prod';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public baseUrl = environment.baseUrl;
  public event: any;
  public share: any;
  constructor(public eventService: EventsService, public _router: Router, public http: HttpClient
    ) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe((events: Event[]) => {
      console.log(events);
      this.event = events;
    }, (error: any) => {
      console.log(error);
    });
  }
  deleteEvent(events: Event) {
    this.eventService.deleteEvent(events.eventId).subscribe((data) => {
        this.event.splice(this.event.indexOf(events), 1);
    }, (error: any) => {
      console.log(error);
    });
  }

   updateEvent(event: Event) {
     this.eventService.setter(event);
     this._router.navigate(['/add-event']);


   }
   newEvent() {
   const event = new Event();
   this.eventService.setter(event);
   this._router.navigate(['/add-event']);

   }

   manageEvent(list: any) {
    // console.log(this.eventService.getter());
   this.eventService.setter(list);

   // console.log(list.eventId)
   this.http.get(this.baseUrl + '/event/' + list.eventId + '/packages').subscribe( res => {

      this.share = res;
      console.log(this.share);
      // this.modalService.open(PackagesComponent)
      this._router.navigate(['/packages']);
    });
   }

}
