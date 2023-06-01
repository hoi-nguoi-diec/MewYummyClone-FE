import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  API_URL: string  = 'http://localhost:8080/api';
  getCategories(): Observable<any[]>{
    return this.http.get<any>(`${this.API_URL}/categories`)
  }
}
