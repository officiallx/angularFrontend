import { Component, OnInit } from '@angular/core';
import { Lunch } from 'src/app/models/lunch';
import { Router } from '@angular/router';
import { LunchService } from 'src/app/shared-service/lunch.service';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  public lunch:Lunch[];
  constructor(public lunchService:LunchService, public _router:Router) { }

  ngOnInit() {
    this.lunchService.getAllLunches().subscribe((lunch: Lunch[])=>{
      console.log(lunch);
      this.lunch=lunch;
    },(error: any)=>{
      console.log(error);
    })
  }

  deleteDinner(lunch: Lunch) {
    this.lunchService.deleteLunch(lunch.lunchId).subscribe((data) => {
      this.lunch.splice(this.lunch.indexOf(lunch), 1);
    }, (error: any) => {
      console.log(error);
    });
  }

   updateDinner(lunch: Lunch){
     this.lunchService.setter(lunch);
     this._router.navigate(['/add-lunch']);


   }
   newDinner(){
   let lunch = new Lunch();
    this.lunchService.setter(lunch);
     this._router.navigate(['/add-lunch']);

   }

}
