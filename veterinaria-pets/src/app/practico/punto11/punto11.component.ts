import { Component, OnInit } from '@angular/core';
import { CalcularEdadPipe } from 'src/app/calcular-edad.pipe';

@Component({
  selector: 'app-punto11',
  templateUrl: './punto11.component.html',
  styleUrls: ['./punto11.component.css']
})
export class Punto11Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  edad: any = CalcularEdadPipe.prototype.transform(2017);
  

}
