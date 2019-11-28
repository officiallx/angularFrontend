import { Component, OnInit } from '@angular/core';
import { Dinner } from 'src/app/models/dinner';
import { DinnerService } from 'src/app/shared-service/dinner.service';
import { Router } from '@angular/router';
import { PackageService } from 'src/app/shared-service/package.service';
import { Package } from 'src/app/models/package';

@Component({
  selector: 'app-add-dinner',
  templateUrl: './add-dinner.component.html',
  styleUrls: ['./add-dinner.component.css']
})
export class AddDinnerComponent implements OnInit {

  private dinner:Dinner;
  private Package: Package = new Package();
  private packageList: Array<Package> =  new Array<Package>();
  constructor(private dinnerService:DinnerService,private _rotuer:Router,private packageService: PackageService) { }

  ngOnInit() {
    this.dinner=this.dinnerService.getter();
    this.packageService.getAll().subscribe((response: any) => {
      this.packageList = response;
      console.log(this.packageList);
    });
    if(this.dinner.dinnerId !== undefined && this.dinner.dinnerId !== 0){
      this.Package = this.dinner.aPackage;
    }
  }

  processForm(){
    this.dinner.aPackage = this.Package;
    if(this.dinner.dinnerId  === undefined){
      console.log(this.dinner);
       this.dinnerService.createDinner(this.dinner).subscribe((dinner)=>{
         console.log(dinner);
         this._rotuer.navigate(['/dinner']);
       },(error)=>{
         console.log(error);
       });
    }else{
      console.log(this.dinner);
       this.dinnerService.updateDinner(this.dinner).subscribe((dinner)=>{
         console.log(dinner);
         this._rotuer.navigate(['/dinner']);
       },(error)=>{
         console.log(error);
       });
    }
  }

}
