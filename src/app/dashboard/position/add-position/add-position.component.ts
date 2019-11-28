import { Component, OnInit } from '@angular/core';
import { Position } from 'src/app/models/position';
import { PositionService } from 'src/app/shared-service/position.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.css']
})
export class AddPositionComponent implements OnInit {

  private position:Position;
  constructor(private positionService:PositionService,private _rotuer:Router) { }

  ngOnInit() {
    this.position=this.positionService.getter();
  }

  processForm(){
    if(this.position.pId  === undefined){
      console.log(this.position);
       this.positionService.createPosition(this.position).subscribe((position)=>{
         console.log(position);
         this._rotuer.navigate(['/position']);
       },(error)=>{
         console.log(error);
       });
    }else{
      console.log(this.position);
       this.positionService.updatePosition(this.position).subscribe((position)=>{
         console.log(position);
         this._rotuer.navigate(['/position']);
       },(error)=>{
         console.log(error);
       });
    }
  }

}
