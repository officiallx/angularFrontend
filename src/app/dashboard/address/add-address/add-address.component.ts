import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/shared-service/address.service';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  private address:Address = new Address();
  constructor(private addressService:AddressService,private _rotuer:Router) { }

  ngOnInit() {
    this.address=this.addressService.getter();
  }

  processForm(){
    if(this.address.aId===undefined){
       this.addressService.createAddress(this.address).subscribe((address)=>{
         console.log(address);
         this._rotuer.navigate(['/address']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this.addressService.updateAddress(this.address).subscribe((address)=>{
         console.log(address);
         this._rotuer.navigate(['/address']);
       },(error)=>{
         console.log(error);
       });
    }
  }

}
