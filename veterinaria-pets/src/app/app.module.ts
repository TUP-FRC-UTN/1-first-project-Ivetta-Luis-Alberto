import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Punto02Component } from './practico/punto02/punto02.component';
import { Punto03Component } from './practico/punto03/punto03.component';

@NgModule({
  declarations: [
    AppComponent,
    Punto02Component,
    Punto03Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
