import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ViewCustomerComponent } from './viewcustomer/viewcustomer.component';


@NgModule({
  declarations: [
    ViewCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
