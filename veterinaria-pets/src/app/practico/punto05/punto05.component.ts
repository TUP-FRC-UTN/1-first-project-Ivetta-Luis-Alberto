import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-punto05',
  templateUrl: './punto05.component.html',
  styleUrls: ['./punto05.component.css']
})
export class Punto05Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  textoCapturado : string = "";
  rutaParaMostrar : string = "";

  cargarRuta() { 
    alert("Cargando ruta: " + this.textoCapturado);

    this.rutaParaMostrar = this.textoCapturado;
  }



}
