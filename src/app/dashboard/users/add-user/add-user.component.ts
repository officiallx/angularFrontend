import { Component, OnInit } from '@angular/core';
import{ApplicationUser}  from '../../../models/user';
import{Router}  from '@angular/router';
import { UserService } from 'src/app/shared-service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  private user:ApplicationUser;

  constructor(private _userService:UserService,private _rotuer:Router) { }


  ngOnInit() {
    this.user=this._userService.getter();
  }

  processForm(){
    if(this.user.id==undefined){
       this._userService.createUser(this.user).subscribe((user)=>{
         console.log(user);
         this._rotuer.navigate(['/users']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this._userService.updateUser(this.user).subscribe((user)=>{
         console.log(user);
         this._rotuer.navigate(['/users']);
       },(error)=>{
         console.log(error);
       });
    }
  }
}
