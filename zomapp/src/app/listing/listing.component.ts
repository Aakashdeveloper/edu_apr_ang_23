import { Component, OnInit,  } from '@angular/core';
import { IRest } from '../models/rest.model'

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  userInput:string = '';
  restaurants: any[] = [
     {"_id": "618776b162a1816f885956bc"}
  ]
  constructor() { }

  ngOnInit(): void {
    console.log("inside ngOnInit>>>")
  }


}
