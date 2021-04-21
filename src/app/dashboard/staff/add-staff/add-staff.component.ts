import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/models/staff';
import { StaffService } from 'src/app/shared-service/staff.service';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { AddressService } from 'src/app/shared-service/address.service';
import { PositionService } from 'src/app/shared-service/position.service';
import { Position } from 'src/app/models/position';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  public staff:Staff;
  public addressList: Array<Address> = new Array<Address>();
  public positionList: Array<Position> = new Array<Position>();
  public Address: Address = new Address();
  public Position: Position = new Position();
  constructor(public staffService:StaffService,
              public rotuer:Router,
              public addressService: AddressService,
              public positionService: PositionService) { }

  ngOnInit() {
    this.staff=this.staffService.getter();
    if(this.staff.staffId !== 0 && this.staff.staffId !== undefined){
      console.log(this.staff.staffId);
      this.Address = this.staff.staffAddress;
      this.Position = this.staff.staffPosition;
    }else{
      this.Address = new Address();
      this.Position = new Position();
    }
    this.addressService.getAllAddress().subscribe((response: any) => {
      this.addressList = response;
    });
    this.positionService.getPositions().subscribe((response: any) => {
      this.positionList = response;
    });
  }

  processForm(){
    this.staff.staffAddress = this.Address;
    this.staff.staffPosition = this.Position;
    if(this.staff.staffId==undefined){
       this.staffService.createStaff(this.staff).subscribe((staff)=>{
         console.log(staff);
         this.rotuer.navigate(['/staff']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this.staffService.updateStaff(this.staff).subscribe((staff)=>{
         console.log(staff);
         this.rotuer.navigate(['/staff']);
       },(error)=>{
         console.log(error);
       });
    }

  }
}
