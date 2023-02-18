import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule } from '@angular/forms';
//import { PasswordComponent } from './components/password/password';
import { ClientPasswordComponent } from './client-password/client-password.component';

@NgModule({
  declarations: [
    AppComponent,    
     ClientPasswordComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
