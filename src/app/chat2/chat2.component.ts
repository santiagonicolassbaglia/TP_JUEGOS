import { Component } from '@angular/core';

@Component({
  selector: 'app-chat2',
  templateUrl: './chat2.component.html',
  styleUrls: ['./chat2.component.css']
})
export class Chat2Component {
  messages: { sender: string, text: string }[] = [];
  newMessage: string = '';
  chatAbierto: boolean = false;
  sendMessage() {
    if (this.newMessage.trim() === '') return; // No enviar mensajes vacíos

    this.messages.push({
      sender: 'Tú', // Cambia esto al nombre de usuario real
      text: this.newMessage
    });

    this.newMessage = '';
  }

  toggleChat() {
    this.chatAbierto = !this.chatAbierto;
  }




  
}