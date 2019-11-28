import { Component, OnInit } from '@angular/core';
import { Dinner } from 'src/app/models/dinner';
import { Router } from '@angular/router';
import { DinnerService } from 'src/app/shared-service/dinner.service';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.css']
})
export class DinnerComponent implements OnInit {

  private dinner:Dinner[];
  constructor(private dinnerService:DinnerService, private _router:Router) { }

  ngOnInit() {
    this.dinnerService.getAllDinners().subscribe((dinner: Dinner[])=>{
      console.log(dinner);
      this.dinner=dinner;
    },(error: any)=>{
      console.log(error);
    })
  }

  deleteDinner(dinner: Dinner) {
    this.dinnerService.deleteDinner(dinner.dinnerId).subscribe((data) => {
      this.dinner.splice(this.dinner.indexOf(dinner), 1);
    }, (error: any) => {
      console.log(error);
    });
  }

   updateDinner(dinner: Dinner){  
     this.dinnerService.setter(dinner);
     this._router.navigate(['/add-dinner']);


   }
   newDinner(){
   let dinner = new Dinner();
    this.dinnerService.setter(dinner);
     this._router.navigate(['/add-dinner']);
   
   }

}
