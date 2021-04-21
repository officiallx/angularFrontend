import { Component, OnInit } from '@angular/core';
import { Breakfast } from 'src/app/models/breakfast';
import { Router } from '@angular/router';
import { BreakfastService } from 'src/app/shared-service/breakfast.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  public breakfast:Breakfast[];
  constructor(public breakfastService:BreakfastService, public _router:Router) { }

  ngOnInit() {
    this.breakfastService.getAllBreakfast().subscribe((breakfasts: Breakfast[])=>{
      this.breakfast=breakfasts;
      console.log(this.breakfast);
    },(error: any)=>{
      console.log(error);
    })
  }

  deleteBreakfast(breakfast: Breakfast) {
    console.log(breakfast);
    this.breakfastService.deleteBreakfast(breakfast.breakfastId).subscribe((data) => {
      this.breakfast.splice(this.breakfast.indexOf(breakfast), 1);
    }, (error: any) => {
      console.log(error);
    });
  }

   updateBreakfast(breakfast: Breakfast){
     this.breakfastService.setter(breakfast);
     this._router.navigate(['/add-breakfast']);


   }
   newBreakfast(){
   let breakfast = new Breakfast();
    this.breakfastService.setter(breakfast);
     this._router.navigate(['/add-breakfast']);

   }

}
