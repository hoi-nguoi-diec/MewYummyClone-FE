import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  checkEmailExists(email: string): Observable<boolean> {
    const url = `${this.apiUrl}/exists?email=${email}`;
    return this.http.get<boolean>(url);
  }
}
