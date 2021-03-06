import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { Calendar } from '@fullcalendar/core';
import { HttpClient } from '@angular/common/http';

// @ts-ignore
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public orders: any;
  public events: any;
  public users: any;
  public staffs: any;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');

    const calendar = new Calendar(calendarEl, {
      plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
      defaultView: 'dayGridMonth'
    });

    calendar.render();
  });

    this.http.get('https://e-catering.herokuapp.com/api/order').subscribe(res => {
  this.orders = res;
  console.log(this.orders);
  });

    this.http.get('https://e-catering.herokuapp.com/api/events').subscribe(res => {
  this.events = res;
  console.log(this.events);
  });

    this.http.get('https://e-catering.herokuapp.com/api/users').subscribe(res => {
  this.users = res;
  console.log(this.users);
  });

    this.http.get('https://e-catering.herokuapp.com/api/staffs').subscribe(res => {
  this.staffs = res;
  console.log(this.staffs);
  });

  }

}
