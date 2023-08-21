import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcularEdad'
})
export class CalcularEdadPipe implements PipeTransform {

  transform(anioNacimiento: number): number {
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    return anioActual - anioNacimiento;
  }

}
