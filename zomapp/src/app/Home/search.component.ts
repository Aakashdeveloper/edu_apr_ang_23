import {Component,OnInit,OnChanges} from '@angular/core';
import { ICity } from '../models/location.model';
import { IRest } from '../models/rest.model'
import { HomeService } from '../services/Home.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit,OnChanges{
    title:string = "Find Best Place Near You";
    logo:string = "D";
    disabled:boolean = true
    locationData:ICity[] = []
    restaurants:IRest[] = []

    // any thing that need to declare
    constructor(private homeService:HomeService){
        console.log("inside contructor")
    }

    // when the component will load
    ngOnInit(): void {
        console.log("inside ngOnInit")
        this.homeService.getCity()
          .subscribe((data:ICity[]) =>  this.locationData = data)
    }

    // Trigger on event change
    ngOnChanges():void{
      console.log("inside ngOnChanges")
    }



    handleCity(event:Event){
        console.log((event.target as HTMLInputElement).value)
        if((event.target as HTMLInputElement).value !== "default"){
            this.disabled = false
            let stateId = Number((event.target as HTMLInputElement).value);
            this.homeService.getRestwrtcity(stateId)
                .subscribe(
                    (data:IRest[]) => this.restaurants = data,
                    err  =>  console.log(err)
                )
        }else{
            this.disabled = true
        }
       
    }
}