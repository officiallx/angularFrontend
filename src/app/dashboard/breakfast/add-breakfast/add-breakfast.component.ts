import { Component, OnInit } from '@angular/core';
import { Breakfast } from 'src/app/models/breakfast';
import { Router } from '@angular/router';
import { BreakfastService } from 'src/app/shared-service/breakfast.service';
import { Package } from 'src/app/models/package';
import { PackageService } from 'src/app/shared-service/package.service';

@Component({
  selector: 'app-add-breakfast',
  templateUrl: './add-breakfast.component.html',
  styleUrls: ['./add-breakfast.component.css']
})
export class AddBreakfastComponent implements OnInit {

  private breakfast:Breakfast = new Breakfast();
  private Package: Package = new Package();
  private packageList: Array<Package> =  new Array<Package>();
  constructor(private breakfastService:BreakfastService,private _rotuer:Router, private packageService: PackageService) { }

  ngOnInit() {
    this.breakfast=this.breakfastService.getter();
    this.packageService.getAll().subscribe((response: any) => {
      this.packageList = response;
      console.log(this.packageList);
    });
    if(this.breakfast.breakfastId !== undefined && this.breakfast.breakfastId !== 0){
      this.Package = this.breakfast.aPackage;
    }
  }

  processForm(){
    this.breakfast.aPackage = this.Package;
    
    if(this.breakfast.breakfastId  === undefined){
      console.log(this.breakfast);
       this.breakfastService.createBreakfast(this.breakfast).subscribe((breakfast)=>{
         console.log(breakfast);
         this._rotuer.navigate(['/breakfast']);
       },(error)=>{
         console.log(error);
       });
    }else{
      console.log(this.breakfast);
       this.breakfastService.updateBreakfast(this.breakfast).subscribe((breakfast)=>{
         console.log(breakfast);
         this._rotuer.navigate(['/breakfast']);
       },(error)=>{
         console.log(error);
       });
    }
  }

}
