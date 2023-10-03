import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import{HomeComponent} from './components/home/home.component';
import{PresentacionComponent} from './components/presentacion/presentacion.component';
import{RegistroComponent} from './registro/registro.component';
import {JuegoAhorcadoComponent} from './juego-ahorcado/juego-ahorcado.component';
import {ErrorComponent} from './error/error.component';
import {ChatComponent} from './chat/chat.component';
import {Chat2Component} from './chat2/chat2.component';


const routes: Routes = [
  {path: 'presentacion', component: PresentacionComponent},
  { path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'juego-ahorcado', component: JuegoAhorcadoComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'chat2', component: Chat2Component},
  { path: '**', component: ErrorComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},


  { path: 'asignaturas', loadChildren: () => import('./modulos/asignaturas/asignaturas.module').then(m => m.AsignaturasModule) },//para que cargue mas rapido

 ];


 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}