import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { GetUsersComponent } from './get-users.component';

@NgModule({
  declarations: [GetUsersComponent],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [GetUsersComponent]
})
export class GetUsersModule { }
