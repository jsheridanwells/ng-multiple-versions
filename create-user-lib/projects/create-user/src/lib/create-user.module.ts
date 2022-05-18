import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user.component';

@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [CreateUserComponent]
})
export class CreateUserModule { }
