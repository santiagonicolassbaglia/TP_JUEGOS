import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego2',
  templateUrl: './juego2.component.html',
  styleUrls: ['./juego2.component.css']
})
export class Juego2Component implements OnInit {
  puntaje: number = 0;
  cartaActual: number= 0;
  cartaAnterior: number= 0;
  resultado: string = '';
  intentosRestantes: number = 3; // Establece el número de intentos permitidos
  juegoGanado: boolean = false;
  juegoPerdido: boolean = false;

  constructor() {}

  ngOnInit() {
    this.iniciarJuego();
  }

  iniciarJuego() {
    // Restablecer todas las propiedades del juego
    this.puntaje = 0;
    this.intentosRestantes = 3;
    this.juegoGanado = false;
    this.juegoPerdido = false;
    this.resultado = '';
    this.generarCarta();
  }

  generarCarta() {
    this.cartaAnterior = this.cartaActual;
    this.cartaActual = Math.floor(Math.random() * 10); // Genera una carta aleatoria (números del 0 al 9)
  }

  verificarResultado(eleccion: string) {
    this.generarCarta();
  
    if (
      (eleccion === 'mayor' && this.cartaActual > this.cartaAnterior) ||
      (eleccion === 'menor' && this.cartaActual < this.cartaAnterior)
    ) {
      this.resultado = 'Correcto';
      this.puntaje++;
      
      if (this.puntaje === 5) {
        this.juegoGanado = true;
        this.resultado = 'Ganaste';
 
      }
    } else {
      this.resultado = 'Incorrecto';
      this.intentosRestantes--;
  
      if (this.intentosRestantes === 0) {
        this.juegoPerdido = true;
        this.resultado = 'Perdiste';
    
      }
    }
 
    
  }
}
