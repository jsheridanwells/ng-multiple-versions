import { Component, OnInit } from '@angular/core';
import { CreateUserService } from './create-user.service';
import { NewUser } from './new-user';
import { UserResponse } from './user-response';

@Component({
  selector: 'lib-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  newUser: NewUser;
  createdUser: UserResponse;

  constructor(
    private createUserService: CreateUserService
  ) { }

  ngOnInit() {
    this.resetUser();
  }

  onSubmit() {
    this.createUserService.createUserInApi(this.newUser)
      .subscribe(res => this.createdUser = res);
    this.resetUser();
  }

  private resetUser(): void {
    this.newUser = new NewUser();
  }
}

