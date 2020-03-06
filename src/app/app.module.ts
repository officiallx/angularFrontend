import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './dashboard/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AsidenavbarComponent } from './layout/asidenavbar/asidenavbar.component';
import { FooternavbarComponent } from './layout/footernavbar/footernavbar.component';
import { TopnavbarComponent } from './layout/topnavbar/topnavbar.component';
import { CalendarComponent } from './dashboard/calendar/calendar.component';
import { BaseComponent } from './layout/base/base.component';
import {FormsModule} from '@angular/forms';
import { UsersComponent } from './dashboard/users/users.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { HttpClientModule} from '@angular/common/http';
import { UserService } from './shared-service/user.service';
import { AddressComponent } from './dashboard/address/address.component';
import { AddAddressComponent } from './dashboard/address/add-address/add-address.component';
import { AddressService } from './shared-service/address.service';
import { EventsComponent } from './dashboard/events/events.component';
import { EventsService } from './shared-service/events.service';
import { AddEventsComponent } from './dashboard/events/add-events/add-events.component';
import { PackagesComponent } from './dashboard/packages/packages.component';
import { PackageService } from './shared-service/package.service';
import { OrderService } from './shared-service/order.service';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPackagesComponent } from './dashboard/packages/add-packages/add-packages.component';
import { AddUserComponent } from './dashboard/users/add-user/add-user.component';
import { StaffComponent } from './dashboard/staff/staff.component';
import { PositionComponent } from './dashboard/position/position.component';
import { PositionService } from './shared-service/position.service';
import { AddPositionComponent } from './dashboard/position/add-position/add-position.component';
import { AddStaffComponent } from './dashboard/staff/add-staff/add-staff.component';
import { BreakfastComponent } from './dashboard/breakfast/breakfast.component';
import { LunchComponent } from './dashboard/lunch/lunch.component';
import { DinnerComponent } from './dashboard/dinner/dinner.component';
import { AddBreakfastComponent } from './dashboard/breakfast/add-breakfast/add-breakfast.component';
import { AddDinnerComponent } from './dashboard/dinner/add-dinner/add-dinner.component';
import { AddLunchComponent } from './dashboard/lunch/add-lunch/add-lunch.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AsidenavbarComponent, 
    FooternavbarComponent, 
    TopnavbarComponent, 
    CalendarComponent,
    BaseComponent, 
    UsersComponent,
    AddUserComponent, 
    OrdersComponent, 
    ProfileComponent, 
    AddressComponent,
    AddAddressComponent, 
    EventsComponent, 
    AddEventsComponent, 
    PackagesComponent, 
    AddPackagesComponent, 
    StaffComponent,
    PositionComponent,
    AddPositionComponent,
    AddStaffComponent,
    BreakfastComponent,
    LunchComponent,
    DinnerComponent,
    AddBreakfastComponent,
    AddDinnerComponent,
    AddLunchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    UserService, 
    AddressService, 
    EventsService, 
    PackageService,
    OrderService, 
    PositionService],

  bootstrap: [AppComponent],
  entryComponents: [
    
  ]
})
export class AppModule { }
