import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  constructor(
    private orderService:OrderService,
    private route: ActivatedRoute
  ) { }

  orders:any[] = [];
  id:string|null='';
  bank:string|null='';
  mode:string|null='';
  date:string|null='';
  userInfo:string|null = localStorage.getItem('userResponse')
  email = this.userInfo?this.userInfo.split(',')[2]:''

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('orderId')
    this.id =this.id?this.id:''
    this.bank = this.route.snapshot.queryParamMap.get('bank_name')
    this.bank =this.bank?this.bank:''
    this.mode = this.route.snapshot.queryParamMap.get('mode')
    this.mode =this.mode?this.mode:''
    this.date = this.route.snapshot.queryParamMap.get('date')
    this.date =this.date?this.date:''

    this.orderService.updateOrder(this.id,this.bank,this.mode,this.date)
    .subscribe((data:any[]) => {
      console.log('info updated')
    })

    this.orderService.getOrder(this.email)
      .subscribe((data:any[]) => {
        this.orders = data
      })
  }

}
