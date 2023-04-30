import { NgModule } from '@angular/core';
import { HomeService } from '../services/Home.service';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { QuickSearchComponent } from './quickSearch.component';
import { SearchComponent } from './search.component';

@NgModule({
    declarations: [
        HomeComponent,
        SearchComponent,
        QuickSearchComponent
    ],
    imports: [
        SharedModule
    ],
    providers:[
        HomeService
    ]
})


export class HomeModule{}