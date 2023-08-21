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
  edad: number = 5
  nacimiento: number = 2017
  tutor: string = "juanito"


  sumarEdad() {
    this.edad++;
  }

    //va a venir del hijo .. rango
  
    valorRecibido: number = 0.8;

    recibirValor(event: number) {
      this.valorRecibido = event;
    }

    variable_check: boolean = true;


    //va a venir del hijo, cambio color titulo
    colorRecibido: string = "";

    recibirColor(color: string) {
      this.colorRecibido = color;
    }
   
}
