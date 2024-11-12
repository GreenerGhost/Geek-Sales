import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiProducts } from '@main/apiServer/api-server-local';
import { Observable } from 'rxjs';
import { JSONProduct } from '@models/json-product';

@Injectable({
  providedIn: 'root',
})

export class ProductService {

  private ApiUrl: string = apiProducts.serverUrl;
  
  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<JSONProduct[]> {
    return this.http.get<JSONProduct[]>(`${this.ApiUrl}`);
  }
}