import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto03',
  templateUrl: './punto03.component.html',
  styleUrls: ['./punto03.component.css']
})
export class Punto03Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nombre: string = "panchito"
  raza: string = "calle"
  sexo: string = "machito"
  anio: number = 5
  nacimiento: number = 2017
  tutor: string = "juanito"

}
