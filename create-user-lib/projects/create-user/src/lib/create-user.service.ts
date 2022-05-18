import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { NewUser } from './new-user';
import { UserResponse } from './user-response';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(
    private http: HttpClient
  ) { }

  createUserInApi(newUser: NewUser): Observable<UserResponse> {
    return this.http.post<UserResponse>('https://reqres.in/api/users', newUser.payload)
      .pipe(map(res => {
        const user = new UserResponse();
        user.firstName = res['first_name'];
        user.lastName = res['last_name'];
        user.email = res['email'];
        user.avatar = res['avatar'];
        user.id = res['id'];
        user.createdAt = res['createdAt'];
        return user;
      }));
  }
}
