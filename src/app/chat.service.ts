import { Injectable } from '@angular/core';
import { Subject, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private messagesSubject = new Subject<{ sender: string; text: string }>();
  messages$ = this.messagesSubject.asObservable();

  constructor() {}

  sendMessage(message: { sender: string; text: string }) {
    // Envía el mensaje al servicio de chat
    this.messagesSubject.next(message);
  }

  simulateIncomingMessages() {
    // Simula mensajes entrantes (respuestas automáticas)
    const responseDelay = 1000; // Retraso en milisegundos

    // Envía un mensaje de bienvenida
    this.sendMessage({
      sender: 'ChatBot',
      text: 'Hola, ¿en qué puedo ayudarte?',
    });

    // Después de un retraso, envía las opciones
    timer(responseDelay).subscribe(() => {
      this.sendMessage({
        sender: 'ChatBot',
        text: 'Opciones disponibles:\n1. Cambio de contraseña\n2. Ir al home\n3. Información de juegos',
      });
    });
  }
}
