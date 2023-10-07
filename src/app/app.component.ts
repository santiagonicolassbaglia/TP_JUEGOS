import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Santiago Sbaglia';
  usuario: Usuario;

  

  constructor() {
    this.usuario = Usuario.traerDeLocalStorage() || Usuario.CrearUsuarioVacio();
  }
}
