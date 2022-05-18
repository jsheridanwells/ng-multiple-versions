import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GetUsersModule } from 'get-users';
import { CreateUserModule } from 'create-user';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    GetUsersModule,
    CreateUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
