import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-punto06',
  templateUrl: './punto06.component.html',
  styleUrls: ['./punto06.component.css']
})
export class Punto06Component implements OnInit {

  @Output() variableEmisora = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  ocultarMostrarRango: boolean = false;
  valorDelRange: number = 0.8;

  funcionEmisora() {
    this.variableEmisora.emit(this.valorDelRange);
  }
}
