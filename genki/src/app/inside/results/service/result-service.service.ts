import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
    providedIn: 'root'
})
export class ResultService {

    names : String[];

    constructor(
        private http: HttpClient
    ) { }

    getTop3(): Observable<Product[]> {

        this.names =  ["digestion", "stress", "oral health"];

        console.log(this.http.post<Product[]>('http://localhost:8080/productgoal/top3', this.names));

        return this.http.post<Product[]>('http://localhost:8080/productgoal/top3', this.names);
    }
}
