import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto09',
  templateUrl: './punto09.component.html',
  styleUrls: ['./punto09.component.css']
})
export class Punto09Component implements OnInit {

  incremento: number = 0; // Variable inicial

  constructor() { }

  ngOnInit(): void {
    this.incrementar();
  }


   incrementar() {    
    let secondsPassed = 0;
  
    const interval = setInterval(() => {
      this.incremento += 10; // Aumentar la variable en 1 punto
      secondsPassed += 1; // Aumentar los segundos transcurridos
  
      console.log(`Variable: ${this.incremento}, Segundos: ${secondsPassed}`);
  
      if (secondsPassed >= 10) {
        clearInterval(interval); // Detener el intervalo después de 10 segundos
      }
    }, 1000); // Llamada cada 1000ms (1 segundo)
  }
  

  
  
}
