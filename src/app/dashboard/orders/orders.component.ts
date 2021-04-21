import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from 'src/app/models/orders';
import { OrderService } from 'src/app/shared-service/order.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public order:Orders[];
  public value: String;
  constructor(public orderService:OrderService, public _router:Router) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe((order: Orders[])=>{
      console.log(order);
      this.order=order;
    },(error: any)=>{
      console.log(error);
    })
  }

  deleteOrder(orders: Orders){
    this.orderService.deleteOrder(orders.orderId).subscribe((data)=>{
        this.order.splice(this.order.indexOf(orders),1);
    },(error: any)=>{
      console.log(error);
    });
  }

  //  updateOrder(order: Orders){
  //    this.orderService.setter(order);
  //    this._router.navigate(['/add-event']);


  //  }
  //  newOrder(){
  //  let order = new Orders();
  //   this.orderService.setter(order);
  //    this._router.navigate(['/add-event']);

  //  }

}
