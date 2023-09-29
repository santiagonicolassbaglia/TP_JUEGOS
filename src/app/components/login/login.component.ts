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
  errorMensaje: string = ""; // Variable para mostrar mensajes de error

  constructor(private router: Router) { }

  iniciarSesion() {
    // Obtener el usuario almacenado en localStorage
    const usuarioAlmacenado = JSON.parse(localStorage.getItem('usuarioGuardado') || '{}');

    if (
      usuarioAlmacenado.email === this.mail &&
      usuarioAlmacenado.password === this.password
    ) {
      // Las credenciales son correctas, redirige al usuario a la página de inicio (ruta '/home')
      this.router.navigate(['/home']);
    } else {
      // Las credenciales son incorrectas, muestra un mensaje de error
      this.errorMensaje = "Usuario Incorrecto. Si no tenes un usuario, registrate.";
    }
  }

  registrarse() {
    // Redirige al usuario a la pantalla de registro (ruta 'registro')
    this.router.navigate(['/registro']);
  }

  reiniciar() {
    this.mail = "";
    this.password = "";
    this.errorMensaje = ""; // Limpia cualquier mensaje de error anterior
  }
}