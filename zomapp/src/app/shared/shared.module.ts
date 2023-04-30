import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MyUpperPipe } from '../pipes/myUpper.pipe';

@NgModule({
    declarations: [
        MyUpperPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule
    ],
    exports: [
        MyUpperPipe,
        CommonModule,
        FormsModule,
        AppRoutingModule
    ]

})

export class SharedModule {}