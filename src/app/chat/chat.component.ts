import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements  OnInit {
  mostrarChat=false;
  nuevoMensaje: string = "";
  usuarioLogeado:any;
  mensajes:any= [
{
  emisor:"MBuFrTlSJcTyeRrQvD7spJhw46t2",
  texto:"hola"
},
{
  emisor:"id",
  texto:"como estas?"
},
{
  emisor:"MBuFrTlSJcTyeRrQvD7spJhw46t2",
  texto:"bien y vos?"
},
{
  emisor:"id",
  texto:"bien"
},
 ];
  constructor(private authServis:AuthService) { }
 
   ngOnInit(): void {
    this.authServis.getUserLogged().subscribe(usuario=>{
      this.usuarioLogeado=usuario;
    });
   }
   
  
 EnviarMensaje() {
  if( this.nuevoMensaje==""){
    return;
  }
  console.log(this.nuevoMensaje);
let mensaje={
  emisor:this.usuarioLogeado.uid,
  texto:this.nuevoMensaje
  }
this.mensajes.push(mensaje);
this.nuevoMensaje="";

setTimeout(() =>{
  this.scrollToTheLastElemtByClassName();
},20);

 
}

scrollToTheLastElemtByClassName() {
  const chatContainer = document.getElementById('chat-container'); // Reemplaza 'chat-container' con el ID real de tu contenedor de chat
  if (chatContainer) {
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
}

}