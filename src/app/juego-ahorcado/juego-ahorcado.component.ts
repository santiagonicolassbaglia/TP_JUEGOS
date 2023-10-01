import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego-ahorcado',
  templateUrl: './juego-ahorcado.component.html',
  styleUrls: ['./juego-ahorcado.component.css']
})
export class JuegoAhorcadoComponent implements OnInit {
  palabraAdivinar: string = "";
  palabraOculta: string[] = [];
  letrasAdivinadas: string[] = [];
  intentosRestantes: number = 6;
  juegoTerminado: boolean = false;
  juegoPerdido: boolean = false;
  juegoGanado: boolean = false;
  letraInput: string = "";

  palabrasAhorcado: string[] = ["programacion", "javascript", "angular", "typescript", "desarrollo"];

  ngOnInit() {
    this.iniciarJuego();
  }

  iniciarJuego() {
    const palabraIndex = Math.floor(Math.random() * this.palabrasAhorcado.length);
    this.palabraAdivinar = this.palabrasAhorcado[palabraIndex];
    this.palabraOculta = [];
    for (let i = 0; i < this.palabraAdivinar.length; i++) {
      this.palabraOculta.push('_' + "  ");
    }
  }

  adivinarLetra() {
    if (this.juegoTerminado) {
      return;
    }

    if (this.letraInput.length !== 1 || !this.letraInput.match(/[a-zA-Z]/)) {
      return;
    }

    const letra = this.letraInput.toLowerCase();

    if (this.palabraAdivinar.includes(letra)) {
      this.actualizarPalabraOculta(letra);
      if (this.palabraOculta.join('') === this.palabraAdivinar) {
        this.juegoGanado = true;
        this.juegoTerminado = true;
      }
    } else {
      this.intentosRestantes--;
      if (this.intentosRestantes === 0) {
        this.juegoPerdido = true;
        this.juegoTerminado = true;
      }
    }

    this.letrasAdivinadas.push(letra);
    this.letraInput = "";
  }

  actualizarPalabraOculta(letra: string) {
    letra = letra.toLowerCase();
    for (let i = 0; i < this.palabraAdivinar.length; i++) {
      if (this.palabraAdivinar[i].toLowerCase() === letra) {
        this.palabraOculta[i] = letra;
      }
    }
  }

  reiniciarJuego() {
    this.iniciarJuego();
    this.intentosRestantes = 6;
    this.juegoTerminado = false;
    this.juegoGanado = false;
    this.juegoPerdido = false;
    this.letrasAdivinadas = [];
    this.letraInput = "";
  }
 
  generarAyuda(): void {
    const palabraOcultaStr = this.palabraOculta.join('');
    const letrasNoAdivinadas = palabraOcultaStr.split('_');
    const letrasRestantes = 'abcdefghijklmnopqrstuvwxyz'.split('').filter(letra => !this.letrasAdivinadas.includes(letra));
    const letrasDisponibles = letrasRestantes.filter(letra => !letrasNoAdivinadas.includes(letra));
    
    if (letrasDisponibles.length === 0) {
      return;  
    }
  
    const letrasEnPalabra = letrasDisponibles.filter(letra => this.palabraAdivinar.includes(letra));
    
    if (letrasEnPalabra.length === 0) {
      return; 
    }
    
    const letraAleatoria = letrasEnPalabra[Math.floor(Math.random() * letrasEnPalabra.length)];
    this.letraInput = letraAleatoria; 
  }
}
