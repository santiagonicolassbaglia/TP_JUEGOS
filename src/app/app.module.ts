import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { AppRoutingModule } from './app-routing.module';
import { LaboivComponent } from './asgnaturas/laboiv/laboiv.component';
   

import { Usuario } from '../app/clases/usuario';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PresentacionComponent,
    LaboivComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule
    ,FormsModule, AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
