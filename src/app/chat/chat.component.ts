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
  usuarioLogueado:any;
nuevoMensaje: string = "";
 
 
EnviarMensaje() {
  console.log(this.nuevoMensaje);
  this.nuevoMensaje = "";
}

}
