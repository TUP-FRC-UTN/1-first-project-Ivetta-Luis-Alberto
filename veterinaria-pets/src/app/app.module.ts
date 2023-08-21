import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalcularEdadPipe } from './calcular-edad.pipe';

import { AppComponent } from './app.component';
import { Punto02Component } from './practico/punto02/punto02.component';
import { Punto03Component } from './practico/punto03/punto03.component';
import { Punto05Component } from './practico/punto05/punto05.component';
import { FormsModule } from '@angular/forms';
import { Punto06Component } from './practico/punto06/punto06.component';
import { Punto09Component } from './practico/punto09/punto09.component';
import { Punto07Component } from './practico/punto07/punto07.component';
import { Punto08Component } from './practico/punto08/punto08.component';
import { Punto10Component } from './practico/punto10/punto10.component';
import { Punto11Component } from './practico/punto11/punto11.component';



@NgModule({
  declarations: [
    AppComponent,
    Punto02Component,
    Punto03Component,
    Punto05Component,
    Punto06Component,
    Punto09Component,
    Punto07Component,
    Punto08Component,
    Punto10Component,
    Punto11Component,
    CalcularEdadPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
