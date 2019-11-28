import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/shared-service/staff.service';
import { Staff } from 'src/app/models/staff';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  private staff:Staff[];
  constructor(private staffService:StaffService, private _router:Router) { }

  ngOnInit() {
    this.staffService.getAllStaff().subscribe((staff: Staff[])=>{
      console.log(staff);
      this.staff=staff;
    },(error: any)=>{
      console.log(error);
    })
  }

  deleteStaff(staff: Staff) {
    console.log(staff.staffId)
    this.staffService.deleteStaff(staff.staffId).subscribe((data) => {
      this.staff.splice(this.staff.indexOf(staff), 1);
    }, (error: any) => {
      console.log(error);
    });
  }

   updateStaff(staff: Staff){  
     console.log(staff);
     this.staffService.setter(staff);
     this._router.navigate(['/add-staff']);


   }
   newStaff(){
   let staff = new Staff();
    this.staffService.setter(staff);
     this._router.navigate(['/add-staff']);
   
   }

}
