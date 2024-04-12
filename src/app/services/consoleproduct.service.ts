import { Injectable } from '@angular/core';
import { apiServer } from '../apiServer/api-server-local';
import { HttpClient } from '@angular/common/http';

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
