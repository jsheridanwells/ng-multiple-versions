import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GetUsersComponent } from './get-users.component';

@NgModule({
  declarations: [GetUsersComponent],
  imports: [
    BrowserModule
  ],
  exports: [GetUsersComponent]
})
export class GetUsersModule { }
