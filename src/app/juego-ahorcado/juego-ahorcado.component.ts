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
    this.letrasAdivinadas = [];
    this.letraInput = "";
  }
}
