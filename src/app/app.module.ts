import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { AppRoutingModule } from './app-routing.module';
import { LaboivComponent } from './asgnaturas/laboiv/laboiv.component';
import { RegistroComponent } from './registro/registro.component';
import { JuegoAhorcadoComponent } from './juego-ahorcado/juego-ahorcado.component';
import { ErrorComponent } from './error/error.component';
import { ChatComponent } from './chat/chat.component';
import { Chat2Component } from './chat2/chat2.component';
import { ChatService } from './chat.service';  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PresentacionComponent,
    LaboivComponent,
    RegistroComponent,
    JuegoAhorcadoComponent,
    ErrorComponent,
    ChatComponent,
    Chat2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [ChatService], // Registra tu servicio aquí
  bootstrap: [AppComponent],
})
export class AppModule {}
