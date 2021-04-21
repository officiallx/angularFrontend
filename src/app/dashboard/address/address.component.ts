import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../../models/address';
import { AddressService } from '../../shared-service/address.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  public addresses: Address[];
  constructor(public addressService:AddressService, public _router:Router) { }

  ngOnInit() {
    this.addressService.getAllAddress().subscribe((addresses: Address[])=>{
      console.log(addresses);
      this.addresses=addresses;
    },(error: any)=>{
      console.log(error);
    })
  }

  // deleteAddress(address: Address) {
  //   this.addressService.deleteAddress(address.addressId).subscribe((data) => {
  //     this.addresses.splice(this.addresses.indexOf(address), 1);
  //   }, (error: any) => {
  //     console.log(error);
  //   });
  // }

  deleteAddress(aId: number) {
    this.addressService.deleteAddress(aId)
      .subscribe(
        data => {
          console.log(data);
          this.ngOnInit();
        },
        error => console.log(error));
  }



   updateAddress(address: Address){
     this.addressService.setter(address);
     this._router.navigate(['/add-address']);


   }
   newAddress(){
   let address = new Address();
    this.addressService.setter(address);
     this._router.navigate(['/add-address']);

   }

}
