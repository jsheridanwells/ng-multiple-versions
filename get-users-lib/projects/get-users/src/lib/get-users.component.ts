import { Component, OnInit } from '@angular/core';
import { GetUsersService } from './get-users.service';
import { User } from './user';

@Component({
  selector: 'lib-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  users: User[];

  constructor(
    private getUsersService: GetUsersService
  ) { }

  ngOnInit() {
    this.getUsersService.getUsersFromApi().subscribe(res => {
      this.users = this.readUsersData(res.data);
    });
  }

  private readUsersData(data: any[]): User[] {
    return data.map(d => new User(d));
  }

}
