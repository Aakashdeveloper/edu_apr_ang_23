import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class RegisterService{
    private baseUrl = "http://3.17.216.66:5000/api/auth/register";

    constructor(private http:HttpClient){}

    registerEmp(user:any[]):Observable<any[]>{
        return this.http.post<any[]>(this.baseUrl,user)
    }

}