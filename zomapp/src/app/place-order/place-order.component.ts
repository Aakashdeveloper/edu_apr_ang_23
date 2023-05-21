import { Component, OnInit } from '@angular/core';
import { IOrder } from './order.model';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private orderService:OrderService,
    private datePipe:DatePipe
  ) {}

  restName: string = this.route.snapshot.params['restName']
  id: number = 0;
  orderId:number = Number(Math.floor(Math.random()* 1000000))
  price: number = 889;
  url:string=''
  userInfo:string|null = localStorage.getItem('userResponse')

  name = this.userInfo?this.userInfo.split(',')[1]:'';
  email = this.userInfo?this.userInfo.split(',')[2]:'';
  phone = this.userInfo?this.userInfo.split(',')[3]:'';
  oDate = this.datePipe.transform((new Date), 'MM/dd/yyyy h:mm:ss')

  myOrder = new IOrder(this.name,this.email,'Hon34 Delhi',Number(this.phone),this.price,this.orderId,this.restName)

  ngOnInit(): void {
  }

  submitForm(Form:NgForm):void{
    console.log(Form.value)
    this.orderService.postOrder(Form.value)
      .subscribe((res:any[]) => {console.log('Order Placed')})
    this.url = '/viewOrder?orderId='+Form.value.id+'&bank_name=SBI&mode=NB&date='+this.oDate
  }

}
