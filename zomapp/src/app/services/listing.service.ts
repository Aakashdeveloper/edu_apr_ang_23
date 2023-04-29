import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRest } from '../models/rest.model';

@Injectable()

export class ListingService{
    private baseUrl = "http://3.17.216.66:4000";

    constructor(private http:HttpClient) {}

    getRwrtM(mealId:Number): Observable<IRest[]>{
        return this.http.get<IRest[]>(`${this.baseUrl}/restaurant?mealtype_id=${mealId}`)
    }

    getCuisineData(cuisineId:string): Observable<IRest[]>{
        let mealId = sessionStorage.getItem('mealId')
        return this.http.get<IRest[]>(`${this.baseUrl}/filter/${mealId}?cuisine=${cuisineId}`)
    }

    getCostData(lcost:Number,hcost:Number,mealId:Number):Observable<IRest[]>{
        return this.http.get<IRest[]>(`${this.baseUrl}/filter/${mealId}?hcost=${hcost}&lcost=${lcost}`)
    }



}