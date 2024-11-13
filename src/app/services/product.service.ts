import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreAPI } from '@models/store-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class webProductService {

  API_URL: string = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.API_URL).pipe( res => res );
  }
}
