import { Component, OnInit, Input } from '@angular/core';
import { Package } from '../../models/package';
import { PackageService } from '../../shared-service/package.service';
import { Router } from '@angular/router';
import { Event } from '../../models/event';
import { EventsService } from '../../shared-service/events.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  public apackage: Package[];
  public event: Event[];
  public eventid: any;
  // event1 : Event = new Event();
  constructor(public packageService: PackageService, public _router: Router, public eventService: EventsService
    ) { }
  // @Input() list: any;

  ngOnInit() {
    // console.log(this.list)
    // this.showPackage
    // console.log(event.target)
    this.eventid = this.eventService.getter().eventId;
    console.log(this.eventid);
    this.eventService.getEvents().subscribe((events: Event[]) => {

      this.event = events;
      console.log();
    }, (error: any) => {
      console.log(error);
    });

    this.packageService.getPackages(this.eventid).subscribe((packages: Package[]) => {
      console.log(packages);
      this.apackage = packages;
    }, (error: any) => {
      console.log(error);
    });

  }

  deletePackage(apackage: Package) {
    this.packageService.deletePackage(apackage.packageId).subscribe((data) => {
      this.apackage.splice(this.apackage.indexOf(apackage), 1);
    }, (error: any) => {
      console.log(error);
    });
  }

  updatePackage(apackage: Package) {
    this.packageService.setter(apackage);
    this._router.navigate(['/add-packages']);

  }

  newPackage() {
    const apackage = new Package();
    this.packageService.setter(apackage);
    this._router.navigate(['/add-packages']);
  }

}
