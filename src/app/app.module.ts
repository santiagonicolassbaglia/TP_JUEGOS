import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

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
import { Juego2Component } from './juego2/juego2.component';
import { Juego2Service } from './juego2.service';
import { FormularioComponent } from './formulario/formulario.component';
 

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
    Juego2Component,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
    ReactiveFormsModule,
  ],
  providers: [ChatService, Juego2Service], // Combina los dos providers en uno solo
  bootstrap: [AppComponent],
})
export class AppModule {}
