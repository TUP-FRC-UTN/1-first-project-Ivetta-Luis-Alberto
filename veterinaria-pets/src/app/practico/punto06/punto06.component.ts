import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-punto06',
  templateUrl: './punto06.component.html',
  styleUrls: ['./punto06.component.css']
})
export class Punto06Component implements OnInit {

  @Output() valorCambiado = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  valorSeleccionado: number = 0.8;

  onChangeValor() {
    this.valorCambiado.emit(this.valorSeleccionado);
  }
}
