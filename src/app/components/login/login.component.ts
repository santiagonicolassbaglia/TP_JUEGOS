import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mail: string = "";
  password: string = "";
  errorMensaje: string = "";

  constructor(private router: Router) { }

  iniciarSesion() {
    // Obtener el usuario almacenado en localStorage
    const usuarioAlmacenado = JSON.parse(localStorage.getItem('usuarioGuardado') || '{}');

    if (
      usuarioAlmacenado.email === this.mail &&
      usuarioAlmacenado.password === this.password
    ) {
 
      this.router.navigate(['/home']);
    } else {

      this.errorMensaje = "Usuario Incorrecto. Si no tenes un usuario, registrate.";
    }
  }

  // IngresarConGoogle() {

    
 
//  }
  registrarse() {
    this.router.navigate(['/registro']);
  }

  reiniciar() {
    this.mail = "";
    this.password = "";
    this.errorMensaje = ""; 
  }
}