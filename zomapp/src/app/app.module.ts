import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/footer.component';
import { HeaderComponent } from './Header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeModule } from './Home/home.module';
import { ListingModule } from './listing/listing.module';
import { DetailsModule } from './details/details.module';

@NgModule({
    // All the component & pipe
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        NotfoundComponent
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
    providers:[ ],

    // only and only main component
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}