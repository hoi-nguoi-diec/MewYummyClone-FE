import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../interface/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_URL: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.API_URL}/categories`);
  }
  getCategory(_id: any): Observable<ICategory> {
    return this.http.get<ICategory>(`${this.API_URL}/categories/${_id}`);
  }
  deleteCategories(id: number | string): Observable<ICategory> {
    return this.http.delete<ICategory>(`${this.API_URL}/categories/${id}`);
  }
  addCategories(categories: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(`${this.API_URL}/categories`, categories);
  }
  updatecategories(categories: ICategory): Observable<ICategory> {
    return this.http.put<ICategory>(`${this.API_URL}/categories/${categories._id}`, categories);
  }
}
