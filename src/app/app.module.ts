import { SignUpModule } from './auth/sign-up/sign-up.module';
import { LoginModule } from './auth/login/login.module';
import { HeaderModule } from './header/header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HeaderModule,
    LoginModule,
    SignUpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
