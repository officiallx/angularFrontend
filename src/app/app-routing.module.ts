import { NgModule, ContentChildren } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './dashboard/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './dashboard/calendar/calendar.component';
import { BaseComponent } from './layout/base/base.component';
import { UsersComponent } from './dashboard/users/users.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { AddUserComponent } from './dashboard/users/add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddressComponent } from './dashboard/address/address.component';
import { AddAddressComponent } from './dashboard/address/add-address/add-address.component';
import { EventsComponent } from './dashboard/events/events.component';
import { AddEventsComponent } from './dashboard/events/add-events/add-events.component';
import { PackagesComponent } from './dashboard/packages/packages.component';
import { AddPackagesComponent } from './dashboard/packages/add-packages/add-packages.component';
import { PositionComponent } from './dashboard/position/position.component';
import { StaffComponent } from './dashboard/staff/staff.component';
import { AddPositionComponent } from './dashboard/position/add-position/add-position.component';
import { AddStaffComponent } from './dashboard/staff/add-staff/add-staff.component';
import { BreakfastComponent } from './dashboard/breakfast/breakfast.component';
import { LunchComponent } from './dashboard/lunch/lunch.component';
import { DinnerComponent } from './dashboard/dinner/dinner.component';
import { AddBreakfastComponent } from './dashboard/breakfast/add-breakfast/add-breakfast.component';
import { AddLunchComponent } from './dashboard/lunch/add-lunch/add-lunch.component';
import { AddDinnerComponent } from './dashboard/dinner/add-dinner/add-dinner.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:'login', pathMatch:'full'},

  {path: '', component:BaseComponent,
  children: [
    {path: 'dashboard', component:DashboardComponent},
    {path: 'calendar',component:CalendarComponent},
    {path: 'orders', component:OrdersComponent},
    {path: 'users', component: UsersComponent},
    {path: 'profile',component:ProfileComponent},
    {path: 'add-user', component:AddUserComponent},
    {path: 'address', component:AddressComponent},
    {path: 'add-address', component:AddAddressComponent},
    {path: 'event', component:EventsComponent},
    {path: 'add-event', component:AddEventsComponent},
    {path: 'packages', component:PackagesComponent},
    {path: 'add-packages', component:AddPackagesComponent},
    {path: 'position', component:PositionComponent},
    {path: 'staff', component:StaffComponent},
    {path: 'add-position', component:AddPositionComponent},
    {path: 'add-staff', component:AddStaffComponent},
    {path: 'breakfast', component:BreakfastComponent},
    {path: 'lunch', component:LunchComponent},
    {path: 'dinner', component:DinnerComponent},
    {path: 'add-breakfast', component:AddBreakfastComponent},
    {path: 'add-lunch', component:AddLunchComponent},
    {path: 'add-dinner', component:AddDinnerComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, HttpClientModule, FormsModule]
})
export class AppRoutingModule { }
