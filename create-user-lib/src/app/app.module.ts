import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, Injector, isDevMode, NgModule } from '@angular/core';
import { CreateUserModule } from 'projects/create-user/src/public_api';
import { createCustomElement } from '@angular/elements';

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
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(applicationRef: ApplicationRef) {
    if (!isDevMode()) {
      const el = createCustomElement(AppComponent, { injector: this.injector });
      customElements.define('el-create-user', el);
      return;
    }
    applicationRef.bootstrap(AppComponent);
  }
}
