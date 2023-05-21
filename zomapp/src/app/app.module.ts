import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/footer.component';
import { HeaderComponent } from './Header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeModule } from './Home/home.module';
import { ListingModule } from './listing/listing.module';
import { DetailsModule } from './details/details.module';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register/register.service';
import { LoginService } from './login/login.service';
import { LoginComponent } from './login/login.component';
import { OrderService } from './services/order.service';

@NgModule({
    // All the component & pipe
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        NotfoundComponent,
        PlaceOrderComponent,
        ViewBookingComponent,
        RegisterComponent,
        LoginComponent
    ],

    // All the modules
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        HomeModule,
        ListingModule,
        DetailsModule
    ],

    // All the services
    providers:[
        RegisterService,
        LoginService,
        OrderService,
        DatePipe
     ],

    // only and only main component
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}