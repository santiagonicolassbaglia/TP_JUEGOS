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
  esperandoRespuesta: boolean = false; 
  opciones: string[] = ['1. Cambio de contraseña', '2. Ir al home', '3. Información de juegos'];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.messages$.subscribe((message) => {
      this.messages.push(message);
    });
  }

  sendMessage(userResponse: string = '') {
    if (this.newMessage.trim() === '') return;

    this.chatService.sendMessage({
      sender: 'Usuario',
      text: this.newMessage
    });

    this.newMessage = '';
  }

  toggleChat() {
    this.chatAbierto = !this.chatAbierto;

    if (this.chatAbierto) {
      this.chatService.simulateIncomingMessages();
    }
  }

  handleOptionResponse(option: string) {
    this.sendMessage(option);
    if (option === '1') {
      // Realiza la acción correspondiente al botón "1"
      this.chatService.sendMessage({
        sender: 'Usuario',
        text: '1. Cambio de contraseña' // Envía el mensaje relacionado a la acción "1"
      });
  
      // Puedes realizar otras acciones relacionadas al botón "1" aquí si es necesario
  
      // Establece la variable esperandoRespuesta en false
      this.esperandoRespuesta = false;
    }
  
  }
}
