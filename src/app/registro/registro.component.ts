import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre: string = "";
  email: string = "";
  password: string = "";
  tipo: string = "1";
  sexo: string = "1";
  foto: string = "";
  registroExitoso: boolean = false;

  constructor(private router: Router) { }

  registrar() {
    // Aquí puedes usar las propiedades (nombre, email, password, etc.) para guardar los datos del usuario
    // en el almacenamiento local o enviarlos al servidor, según tus necesidades.

    // Guardar el nuevo usuario en localStorage
    const nuevoUsuario = {
      nombre: this.nombre,
      email: this.email,
      password: this.password,
      tipo: this.tipo,
      sexo: this.sexo,
      foto: this.foto
    };
    localStorage.setItem('usuarioGuardado', JSON.stringify(nuevoUsuario));

    // Marcar el registro como exitoso
    this.registroExitoso = true;

    // Redirige al usuario a la pantalla de inicio de sesión después del registro
    this.router.navigate(['/login']);
  }
}
