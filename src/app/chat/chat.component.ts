import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  mensajes: any = [{
    emisor :"id",
    texto: "hola, como estas?"},

    {emisor :"id",
    texto: "Todo bien, vos?"},

    {emisor :"id",
    texto: "Todo bien, haciendo el tp de lavo IV?"},

    {emisor :"id",
    texto: "ahh buenisimo, ojala te aprueben "},

    {emisor :"id",
    texto: "Seee ojalaa ! "},
 
  ];
  chatAbierto: boolean = true;
  usuarioLogueado:any;
nuevoMensaje: string = "";
 mostrarChat: boolean = false;
 
 EnviarMensaje() {
  if (this.nuevoMensaje.trim() === "") {
    return; // No envíes mensajes vacíos
  }

  this.mensajes.push({
    emisor: "Tú", // Puedes cambiar esto al nombre de usuario actual
    texto: this.nuevoMensaje
  });

  this.nuevoMensaje = "";
}
toggleChat() {
  this.chatAbierto = !this.chatAbierto;
}
}
