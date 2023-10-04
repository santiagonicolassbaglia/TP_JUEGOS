import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat2',
  templateUrl: './chat2.component.html',
  styleUrls: ['./chat2.component.css']
})
export class Chat2Component implements OnInit {
  messages: { sender: string, text: string }[] = [];
  newMessage: string = '';
  chatAbierto: boolean = false;
  esperandoRespuesta: boolean = false; // Nuevo estado para rastrear si se espera una respuesta
  opciones: string[] = ['1. Cambio de contraseña', '2. Ir al home', '3. Información de juegos']; // Lista de opciones

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    // Escucha los mensajes enviados por el servicio de chat.
    this.chatService.messages$.subscribe((message) => {
      this.messages.push(message);

      if (this.esperandoRespuesta) {
        // Si se espera una respuesta, procesa el mensaje del usuario
        this.processUserResponse(message.text);
        this.esperandoRespuesta = false;
      }
    });
  }

  sendMessage(userResponse: string = '') {
    if (this.newMessage.trim() === '') return; // No enviar mensajes vacíos
  
    // Envía el mensaje al servicio de chat
    this.chatService.sendMessage({
      sender: 'Usuario',
      text: this.newMessage
    });
  
    // Limpia el campo de entrada
    this.newMessage = '';
  }

  toggleChat() {
    this.chatAbierto = !this.chatAbierto;

    if (this.chatAbierto) {
      // Inicia la simulación de mensajes entrantes (respuestas automáticas) solo cuando se abre el chat
      this.chatService.simulateIncomingMessages();
    }
  }

  // Método para procesar la respuesta del usuario
  processUserResponse(response: string) {
    // Agrega aquí la lógica para manejar la respuesta del usuario según la opción seleccionada
    // Por ejemplo, si response === '1', maneja la opción 1
    switch (response) {
      case '1':
        this.sendMessage('Has seleccionado la opción 1: Cambio de contraseña');
        break;
      case '2':
        this.sendMessage('Has seleccionado la opción 2: Ir al home');
        break;
      case '3':
        this.sendMessage('Has seleccionado la opción 3: Información de juegos');
        break;
      default:
        this.sendMessage('Opción no válida. Por favor, elige una opción válida.');
        break;
    }
  }

  handleOptionResponse(option: string) {
    this.sendMessage(option); // Envia la opción seleccionada como mensaje
    this.esperandoRespuesta = true; // Espera una respuesta del usuario
  }
}
