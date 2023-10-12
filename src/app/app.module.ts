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
import{AngularFireModule} from '@angular/fire/compat';
import { FormularioComponent } from './formulario/formulario.component';
import { NavbarComponent } from './components/navbar/navbar.component';
 
 
 

const firebaseConfig = {
  apiKey: "AIzaSyBx91B2SypFXjj8WytxpUH_9QVuPk6ned0",
  authDomain: "tpjuegos-43244.firebaseapp.com",
  projectId: "tpjuegos-43244",
  storageBucket: "tpjuegos-43244.appspot.com",
  messagingSenderId: "486520689010",
  appId: "1:486520689010:web:08f77578e8bbe2eb180deb"
};
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
    NavbarComponent,
    
 
 
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
 
  ],
  providers: [ChatService, Juego2Service ], // Combina los dos providers en uno solo
  bootstrap: [AppComponent],
})
export class AppModule {}
