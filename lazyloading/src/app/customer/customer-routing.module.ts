import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCustomerComponent } from './viewcustomer/viewcustomer.component';

const routes: Routes = [
  {
    path:'view',
    component:ViewCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
