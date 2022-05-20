import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  getUsersFromApi(): Observable<any> {
    return of(this.generateUsers());
  }

  private generateUsers() {
    return { "data": [
      { "id": 7, "email": "michael.lawson@reqres.in", "first_name": "Michael", "last_name": "Lawson", "avatar": "" },
      { "id": 8, "email": "lindsay.ferguson@reqres.in", "first_name": "Lindsay", "last_name": "Ferguson", "avatar": "" },
      { "id": 9, "email": "tobias.funke@reqres.in", "first_name": "Tobias", "last_name": "Funke", "avatar": "" },
      { "id": 10, "email": "byron.fields@reqres.in", "first_name": "Byron", "last_name": "Fields", "avatar": "" },
      { "id": 11, "email": "george.edwards@reqres.in", "first_name": "George", "last_name": "Edwards", "avatar": "" },
      { "id": 12, "email": "rachel.howell@reqres.in", "first_name": "Rachel", "last_name": "Howell", "avatar": "" }
    ]};
  }
}
