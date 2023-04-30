import { NgModule } from '@angular/core';
import { DetailsService } from '../services/details.service';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details.component';

@NgModule({
    declarations: [
        DetailsComponent
    ],
    imports: [
        SharedModule
    ],
    providers: [
        DetailsService
    ]
})

export class DetailsModule {}