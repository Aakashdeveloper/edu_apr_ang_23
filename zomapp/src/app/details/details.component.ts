import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRest } from '../models/rest.model';
import { DetailsService } from '../services/details.service';
 
@Component({
    templateUrl: './details.component.html',
    styleUrls:['./details.component.css']
})

export class DetailsComponent implements OnInit{
    id: Number = 0;
    details: IRest[] = [];
    mealId: string|null  = sessionStorage.getItem('mealId')

    constructor(private route:ActivatedRoute,
                private detailsService:DetailsService) {}

    ngOnInit(): void {
        this.id = Number(this.route.snapshot.queryParamMap.get('restId'))
        this.detailsService.getDetails(this.id)
            .subscribe((data:IRest[]) => this.details = data)
    }
}