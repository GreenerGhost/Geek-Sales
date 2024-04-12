import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiServer } from '@main/apiServer/api-server-local';

@Injectable({
  providedIn: 'root',
})
export class ConsoleProductService {
  private ApiUrl: string = apiServer.serverUrl;

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${this.ApiUrl}`);
  }
}
