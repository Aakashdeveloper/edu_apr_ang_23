import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/footer.component';
import { HeaderComponent } from './Header/header.component';
import { HomeComponent } from './Home/home.component';
import { QuickSearchComponent } from './Home/quickSearch.component';
import { SearchComponent } from './Home/search.component';
import { MyUpperPipe } from './pipes/myUpper.pipe'
import { HomeService } from './services/Home.service';
import { ListingComponent } from './listing/listing.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
    // All the component & pipe
    declarations: [
        AppComponent,
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        SearchComponent,
        QuickSearchComponent,
        MyUpperPipe,
        ListingComponent,
        NotfoundComponent
    ],

    // All the modules
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule
    ],

    // All the services
    providers:[
        HomeService
    ],

    // only and only main component
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}