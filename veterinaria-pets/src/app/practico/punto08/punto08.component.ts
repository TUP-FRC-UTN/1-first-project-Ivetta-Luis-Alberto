import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto08',
  templateUrl: './punto08.component.html',
  styleUrls: ['./punto08.component.css']
})
export class Punto08Component implements OnInit {

   mostrar: boolean = false;

  coleccionMascotas: IMascota [] = [
    {
    nombre: "panchito",
    raza:  "calle",
    sexo:  "machito",
    edad:  5,
    nacimiento:  2017,
    tutor:  "juanito",
  },
  {
    nombre: "manchita",
    raza:  "calle",
    sexo:  "hembrita",
    edad:  2,
    nacimiento:  2021,
    tutor:  "pedrito",
  },
  {
    nombre: "pirata", 
    raza:  "calle",
    sexo:  "machito",
    edad:  1,
    nacimiento:  2022,
    tutor:  "carlitos",  
}]

  constructor() { }

  ngOnInit(): void {
  }


}

export interface IMascota {
  nombre: String,
  raza: String,
  sexo: String,
  edad: Number,
  nacimiento: Number,
  tutor: String,
}
