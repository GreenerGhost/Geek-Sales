import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiServer } from '@main/apiServer/api-server-local';
import { Observable } from 'rxjs';
import { JSONProduct } from '@models/json-product';

/**
 * Servicio injectable como una dependencia para los componentes
*/
@Injectable({
  providedIn: 'root',
})
export class ConsoleProductService {
  private ApiUrl: string = apiServer.serverUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<JSONProduct[]> {
    return this.http.get<JSONProduct[]>(`${this.ApiUrl}`);
  }
}
