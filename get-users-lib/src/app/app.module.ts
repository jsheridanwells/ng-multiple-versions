import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GetUsersModule } from 'projects/get-users/src/public_api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GetUsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
