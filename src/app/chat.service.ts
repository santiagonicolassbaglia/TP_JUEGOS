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
    this.messagesSubject.next(message);
  }

  simulateIncomingMessages() {
    const responseDelay = 1000;

    this.sendMessage({
      sender: 'ChatBot',
      text: 'Hola, ¿en qué puedo ayudarte?',
    });

    timer(responseDelay).subscribe(() => {
      this.sendMessage({
        sender: 'ChatBot',
        text: 'Opciones disponibles:\n1. Cambio de contraseña\n2. Ir al home\n3. Información de juegos',
      });
    });
  }
}