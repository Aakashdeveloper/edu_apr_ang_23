import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICity } from '../models/location.model';
import { IRest } from '../models/rest.model';
import { IMeal } from '../models/meal.model';

@Injectable()

export class HomeService{
    private baseUrl = "http://3.17.216.66:4000";

    constructor(private http: HttpClient){}

    getCity():Observable<ICity[]>{
        return this.http.get<ICity[]>(`${this.baseUrl}/location`)
    }

    getRestwrtcity(stateId:number):Observable<IRest[]>{
        return this.http.get<IRest[]>(`${this.baseUrl}/restaurant?stateId=${stateId}`)
    }

    getMeal():Observable<IMeal[]>{
        return this.http.get<IMeal[]>(`${this.baseUrl}/quickSearch`)
    }

}
