import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRest } from '../models/rest.model'
import { ListingService } from '../services/listing.service'

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  mealId:number = 1;
  userInput:string = '';
  restaurants: IRest[] = []
  filterText:string = "Cuisine Filter"

  constructor(private route:ActivatedRoute,
              private listingService:ListingService) { }

  ngOnInit(): void {
    this.mealId = Number(this.route.snapshot.params['id'])
    sessionStorage.setItem('mealId',this.mealId.toString())
    this.listingService.getRwrtM(this.mealId)
      .subscribe((data:IRest[]) => {
        this.restaurants = data
      })
  }

  dataReceive(cuisineId:string){
    console.log(">>>>cuisineId>>>",cuisineId)
    this.listingService.getCuisineData(cuisineId)
      .subscribe((data:IRest[]) => {
        this.restaurants = data
      })
  }

  costDataReceive(cost:string){
    let lcost = Number(cost.split('-')[0])
    let hcost = Number(cost.split('-')[1])
    this.listingService.getCostData(lcost,hcost,this.mealId)
      .subscribe((data:IRest[]) => {
        this.restaurants = data
      })
  }


}
