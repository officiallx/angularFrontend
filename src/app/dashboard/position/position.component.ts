import { Component, OnInit } from '@angular/core';
import { Position } from 'src/app/models/position';
import { PositionService } from 'src/app/shared-service/position.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  private position:Position[];
  constructor(private positionService:PositionService, private _router:Router) { }

  ngOnInit() {
    this.positionService.getPositions().subscribe((position: Position[])=>{
      console.log(position);
      this.position=position;
    },(error: any)=>{
      console.log(error);
    })
  }

  deletePosition(position: Position) {
    console.log(position.pId)
    this.positionService.deletePosition(position.pId).subscribe((data) => {
      this.position.splice(this.position.indexOf(position), 1);
    }, (error: any) => {
      console.log(error);
    });
  }

   updatePosition(position: Position){  
     this.positionService.setter(position);
     this._router.navigate(['/add-position']);
   }
   
   newPosition(){
   let position = new Position();
    this.positionService.setter(position);
     this._router.navigate(['/add-position']);
   
   }

}
