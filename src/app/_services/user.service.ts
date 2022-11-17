import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAllUser(): Observable<any> {
    return this.http.get(API_URL + 'all')
  }

  dowlond(): Observable<any> {
    return this.http.get(API_URL + 'export')
  }

  deleteuser(Username: string): Observable<any> {
    return this.http.delete(API_URL + `delete/${Username}`);
    }

  
}
