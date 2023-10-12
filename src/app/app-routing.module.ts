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
import { Juego2Component } from './juego2/juego2.component';
import { FormularioComponent } from './formulario/formulario.component';


const routes: Routes = [ 
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'presentacion', component: PresentacionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'juego2', component: Juego2Component },  
  { path: 'registro', component: RegistroComponent },
  { path: 'juego-ahorcado', component: JuegoAhorcadoComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'chat2', component: Chat2Component },
  { path: '**', component: ErrorComponent },
  { path: 'asignaturas', loadChildren: () => import('./modulos/asignaturas/asignaturas.module').then(m => m.AsignaturasModule) },
];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}4

