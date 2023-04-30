import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRest } from '../models/rest.model';

@Injectable()

export class DetailsService{
    private baseUrl = "http://3.17.216.66:4000"

    constructor(private http:HttpClient){}

    getDetails(restId:Number):Observable<IRest[]>{
        return this.http.get<IRest[]>(`${this.baseUrl}/details/${restId}`)
    }
}