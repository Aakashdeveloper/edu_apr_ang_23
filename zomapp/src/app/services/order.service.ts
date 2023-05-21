import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRest } from '../models/rest.model';

@Injectable()

export class OrderService{
    private orderUrl = "http://localhost:8899/orders"

    constructor(private http:HttpClient){}

    postOrder(order:any[]):Observable<any[]>{
        return this.http.post<any[]>(this.orderUrl,order)
    }

    getOrder(email:string):Observable<any[]>{
        return this.http.get<any[]>(`${this.orderUrl}?email=${email}`)
    }

    updateOrder(id:string,bank:string,mode:string,date:string):Observable<any>{
        let data={
            bank,
            mode,
            date
        }
        return this.http.patch<any[]>(`${this.orderUrl}/${id}`,data)
    }

}