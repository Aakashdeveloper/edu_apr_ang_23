import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/footer.component';
import { HeaderComponent } from './Header/header.component';
import { HomeComponent } from './Home/home.component';
import { QuickSearchComponent } from './Home/quickSearch.component';
import { SearchComponent } from './Home/search.component';
import { MyUpperPipe } from './pipes/myUpper.pipe'

@NgModule({
    // All the component & pipe
    declarations: [
        AppComponent,
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        SearchComponent,
        QuickSearchComponent,
        MyUpperPipe
    ],

    // All the modules
    imports: [
        BrowserModule
    ],

    // All the services
    providers:[],

    // only and only main component
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}