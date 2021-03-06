import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/shared-service/events.service';
import { Event } from 'src/app/models/event';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment.prod';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {

  public event:Event = new Event();
  selectedFile = null;
  url = environment.baseUrl;
  constructor(
    public eventService:EventsService,
    public _rotuer:Router,
    public http: HttpClient) { }

  ngOnInit() {
    this.event=this.eventService.getter();
  }

  addEvent(){
    const formdata = new FormData();
    formdata.append('file', this.selectedFile, this.selectedFile.name);
    formdata.append('event', JSON.stringify(this.event));
    this.http.post(this.url + '/event', formdata)
        .subscribe(res => {
          console.log(res);
          this._rotuer.navigateByUrl('/dashboard', { skipLocationChange: true }).then(() =>
          this._rotuer.navigate(['/event']));
        });

  }

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
  }

  // processForm(){
  //   if(this.event.eventId==undefined){
  //      this.eventService.createEvent(this.event).subscribe((event)=>{
  //        console.log(event);
  //        this._rotuer.navigate(['/event']);
  //      },(error)=>{
  //        console.log(error);
  //      });
  //   }else{
  //      this.eventService.updateEvent(this.event).subscribe((event)=>{
  //        console.log(event);
  //        this._rotuer.navigate(['/event']);
  //      },(error)=>{
  //        console.log(error);
  //      });
  //   }
  // }

}

