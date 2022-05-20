import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, Injector, isDevMode, NgModule } from '@angular/core';
import { GetUsersModule } from 'projects/get-users/src/public_api';
import { createCustomElement } from '@angular/elements';

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
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(applicationRef: ApplicationRef) {
    if (!isDevMode()) {
      const el = createCustomElement(AppComponent, { injector: this.injector });
      customElements.define('el-get-users', el);
      return;
    }
    applicationRef.bootstrap(AppComponent);
  }
}
