import { Component, OnInit } from '@angular/core';
import { Lunch } from 'src/app/models/lunch';
import { LunchService } from 'src/app/shared-service/lunch.service';
import { Router } from '@angular/router';
import { Package } from 'src/app/models/package';
import { PackageService } from 'src/app/shared-service/package.service';

@Component({
  selector: 'app-add-lunch',
  templateUrl: './add-lunch.component.html',
  styleUrls: ['./add-lunch.component.css']
})
export class AddLunchComponent implements OnInit {

  private lunch:Lunch;
  private Package: Package = new Package();
  private packageList: Array<Package> =  new Array<Package>();
  constructor(private lunchService:LunchService,private _rotuer:Router, private packageService: PackageService) { }

  ngOnInit() {
    this.lunch=this.lunchService.getter();
    this.packageService.getAll().subscribe((response: any) => {
      this.packageList = response;
      console.log(this.packageList);
    });
    if(this.lunch.lunchId !== undefined && this.lunch.lunchId !== 0){
      this.Package = this.lunch.aPackage;
    }
  }

  processForm(){
    this.lunch.aPackage = this.Package;
    if(this.lunch.lunchId  === undefined){
      console.log(this.lunch);
       this.lunchService.createLunch(this.lunch).subscribe((lunch)=>{
         console.log(lunch);
         this._rotuer.navigate(['/lunch']);
       },(error)=>{
         console.log(error);
       });
    }else{
      console.log(this.lunch);
       this.lunchService.updateLunch(this.lunch).subscribe((lunch)=>{
         console.log(lunch);
         this._rotuer.navigate(['/lunch']);
       },(error)=>{
         console.log(error);
       });
    }
  }


}
