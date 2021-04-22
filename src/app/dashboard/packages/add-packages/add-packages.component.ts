import { Component, OnInit } from '@angular/core';
import { Package } from 'src/app/models/package';
import { PackageService } from 'src/app/shared-service/package.service';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { HttpClient } from '@angular/common/http';
import { EventsService } from 'src/app/shared-service/events.service';
import {environment} from '../../../../environments/environment.prod';

@Component({
  selector: 'app-add-packages',
  templateUrl: './add-packages.component.html',
  styleUrls: ['./add-packages.component.css']
})
export class AddPackagesComponent implements OnInit {
  public event:Event = new Event();
  selectedFile = null;
  url: string = environment.baseUrl;
  public package:Package;
  eventId: number;
  constructor(private packageService:PackageService,private _rotuer:Router,private http: HttpClient, private eventsService: EventsService) { }

  ngOnInit() {
    this.package=this.packageService.getter();
    this.eventId = this.eventsService.getter().eventId;
    console.log(this.eventId);
  }

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
  }

  addEvent(){
    const formdata = new FormData();
    formdata.append('file', this.selectedFile, this.selectedFile.name);
    formdata.append('package', JSON.stringify(this.package));
    this.http.post(this.url + '/event/' + this.eventId +'/package', formdata)
        .subscribe(res => {
          console.log(res);
          this._rotuer.navigateByUrl('/dashboard', { skipLocationChange: true }).then(() =>
          this._rotuer.navigate(['/packages']));
        });

  }
  processForm(){
    if(this.package.packageId==undefined){
       this.packageService.createPackage(this.package).subscribe((apackage)=>{
         console.log(apackage);
         this._rotuer.navigate(['/packages']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this.packageService.updatePackage(this.package).subscribe((apackage)=>{
         console.log(apackage);
         this._rotuer.navigate(['/packages']);
       },(error)=>{
         console.log(error);
       });
    }
  }

}
