import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { NewUser } from './new-user';
import { UserResponse } from './user-response';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  createUserInApi(newUser: NewUser): Observable<UserResponse> {
    return of(this.generateUserResponse(newUser))
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

  private generateUserResponse(newUser: NewUser): any {
    return newUser.payload;
  }
}

