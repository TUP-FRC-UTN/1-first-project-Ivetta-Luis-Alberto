import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-punto10',
  templateUrl: './punto10.component.html',
  styleUrls: ['./punto10.component.css']
})
export class Punto10Component implements OnInit {

  ngOnInit(): void {
  }

  constructor() { }

  opcionColor = ["verde", "azul", "rojo"]

  colorSeleccionado: string = "rojo";
  @Output() emitirColor = new EventEmitter<string>();

  propiedadTitulo: string = "text-center text-danger";

  funcionEnviarColor() {
    this.emitirColor.emit(this.colorSeleccionado);

    if (this.colorSeleccionado == "verde") {
      this.propiedadTitulo = "text-center text-" + "success";
    }

    if (this.colorSeleccionado == "azul") {
      this.propiedadTitulo = "text-center text-" + "primary";
    }

    if (this.colorSeleccionado == "rojo") {
      this.propiedadTitulo = "text-center text-" + "danger";
    }
  }
}