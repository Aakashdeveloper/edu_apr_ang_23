import { Component, OnInit } from '@angular/core';
import { IOrder } from './order.model';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  constructor(
    private route:ActivatedRoute
  ) { }

  restName: string = this.route.snapshot.params['restName']
  id: number = 0;
  orderId:number = Number(Math.floor(Math.random()* 1000000))
  price: number = 889;
  url:string=''
  name = '';
  email = '';
  phone = 9343353523;

  myOrder = new IOrder(this.name,this.email,'Hon34 Delhi',Number(this.phone),this.price,this.orderId,this.restName)

  ngOnInit(): void {
  }

  submitForm(Form:NgForm):void{
    console.log(Form.value)
  }

}
