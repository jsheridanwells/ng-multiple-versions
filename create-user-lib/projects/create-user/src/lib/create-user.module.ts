import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user.component';

@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [CreateUserComponent]
})
export class CreateUserModule { }
