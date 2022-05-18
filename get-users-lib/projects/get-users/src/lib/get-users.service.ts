import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor(
    private http: HttpClient
  ) { }

  getUsersFromApi(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=2');
  }
}
