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
  @Output() colorEnviado = new EventEmitter<string>();

  colorTitulo: string = "text-center text-danger";

  enviarMsj() {
    this.colorEnviado.emit(this.colorSeleccionado);

    if (this.colorSeleccionado == "verde") {
      this.colorTitulo = "text-center text-" + "success";
    }

    if (this.colorSeleccionado == "azul") {
      this.colorTitulo = "text-center text-" + "primary";
    }

    if (this.colorSeleccionado == "rojo ") {
      this.colorTitulo = "text-center text-" + "danger";
    }
  }
}