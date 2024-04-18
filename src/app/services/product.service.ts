import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreAPI } from '@models/store-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<StoreAPI> {
    return this.http.get<StoreAPI>(`https://fakestoreapi.com/products`);
  }

}
