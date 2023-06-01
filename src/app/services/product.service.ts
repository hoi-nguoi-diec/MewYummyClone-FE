import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  API_URL: string  = 'http://localhost:8080/api';
  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${this.API_URL}/products`)
  }
  deleteProduct(_id: number| string): Observable<IProduct>{
    return this.http.delete<IProduct>(`${this.API_URL}/products/`+_id)
  }
}
