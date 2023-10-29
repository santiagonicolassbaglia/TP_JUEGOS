import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {
  // Variables para el juego
  preguntas: any[] = []; // Aquí almacenarás las preguntas
  preguntaActual: any; // La pregunta que se muestra en la pantalla actual
  opciones: string[] = []; // Opciones de respuesta
  puntaje: number = 0; // El puntaje del jugador

  constructor() { }

  ngOnInit(): void {
    this.cargarPreguntas();
  }

  cargarPreguntas() {
    // Simula una solicitud a una API (puedes implementar la lógica real aquí)
    this.preguntas = [
      {
        pregunta: '¿Cuál es la capital de Francia?',
        opciones: ['Londres', 'Madrid', 'París', 'Berlín'],
        respuestaCorrecta: 'París'
      },
      // Agrega más preguntas aquí
    ];
    this.mostrarSiguientePregunta();
  }

  mostrarSiguientePregunta() {
    if (this.preguntas.length > 0) {
      // Obtén una pregunta aleatoria
      const index = Math.floor(Math.random() * this.preguntas.length);
      this.preguntaActual = this.preguntas[index];
      this.opciones = this.preguntaActual.opciones;

      // Elimina la pregunta mostrada de la lista para evitar repeticiones
      this.preguntas.splice(index, 1);
    } else {
      // Aquí puedes manejar el final del juego (por ejemplo, mostrar el puntaje final)
      alert('¡Juego completado! Puntaje final: ' + this.puntaje);
    }
  }

  seleccionarRespuesta(respuesta: string) {
    if (respuesta === this.preguntaActual.respuestaCorrecta) {
      this.puntaje += 10; // Puntuación por respuesta correcta (ajusta según tus reglas)
    }
    this.mostrarSiguientePregunta();
  }

  reiniciarJuego() {
    // Reinicia todas las variables del juego
    this.puntaje = 0;
    this.preguntas = [];
    this.preguntaActual = null;
    this.opciones = [];
    this.cargarPreguntas();
  }
}
