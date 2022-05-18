import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CreateUserModule } from 'projects/create-user/src/public_api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CreateUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
