import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Punto02Component } from './practico/punto02/punto02.component';
import { Punto03Component } from './practico/punto03/punto03.component';
import { Punto05Component } from './practico/punto05/punto05.component';
import { FormsModule } from '@angular/forms';
import { Punto06Component } from './practico/punto06/punto06.component';


@NgModule({
  declarations: [
    AppComponent,
    Punto02Component,
    Punto03Component,
    Punto05Component,
    Punto06Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
