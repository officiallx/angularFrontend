import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { Calendar } from '@fullcalendar/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private orders: any;
  private events: any;
  private users: any;
  private staffs: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new Calendar(calendarEl, {
      plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
      defaultView: 'dayGridMonth'
    });

    calendar.render();
  }); 

  this.http.get('http://e-catering.herokuapp.com/api/order').subscribe(res =>{
  this.orders = res;
  console.log(this.orders);
  })

  this.http.get('http://e-catering.herokuapp.com/api/events').subscribe(res =>{
  this.events = res;
  console.log(this.events);
  })

  this.http.get('http://e-catering.herokuapp.com/api/users').subscribe(res =>{
  this.users = res;
  console.log(this.users);
  })

  this.http.get('http://e-catering.herokuapp.com/api/staffs').subscribe(res =>{
  this.staffs = res;
  console.log(this.staffs);
  })

  }

}
