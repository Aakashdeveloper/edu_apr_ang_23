import { NgModule } from '@angular/core';
import { CostFilterComponent } from '../filters/costFilter.component';
import { CuisineFilterComponent } from '../filters/cuisineFilter.component';
import { RestSearchFilter } from '../pipes/searchFilter.pipe';
import { ListingService } from '../services/listing.service';
import { SharedModule } from '../shared/shared.module';
import { ListingComponent } from './listing.component';

@NgModule({
    declarations: [
        ListingComponent,
        RestSearchFilter,
        CuisineFilterComponent,
        CostFilterComponent,
    ],
    imports: [
        SharedModule
    ],
    providers:[
        ListingService,
    ]
})

export class ListingModule {}