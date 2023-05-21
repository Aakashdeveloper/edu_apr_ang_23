import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { ListingComponent } from './listing/listing.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsComponent } from './details/details.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =[
    {path:'details', component:DetailsComponent},
    {path:'listing/:id', component:ListingComponent},
    {path:'home', component:HomeComponent},
    {path:'placeOrder/:restName', component:PlaceOrderComponent},
    {path:'viewOrder', component:ViewBookingComponent},
    {path:'register', component:RegisterComponent},
    {path:'login', component:LoginComponent},
    {path:'viewOrder', component:ViewBookingComponent},
    {path:'home', component:HomeComponent},
    {path:'', component:HomeComponent},
    {path:'**',pathMatch:'full', component:NotfoundComponent}
]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    providers:[],
    exports: [RouterModule]
})

export class AppRoutingModule {}