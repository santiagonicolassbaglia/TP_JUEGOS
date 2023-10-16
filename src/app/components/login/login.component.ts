import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 usuario= {
    email: '',
    password: ''
  }
  form: FormGroup;
  errorMensaje: string = '';

  mail: string = "";
  password: string = "";
 
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private angularFirestore: AngularFirestore
  ) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)],
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')],

    });
    this.mail = "";
    this.password = "";
    this.errorMensaje = "";
  }
  //constructor(private router: Router) { }
  

  // iniciarSesion() {
  //   // Obtener el usuario almacenado en localStorage
  //   const usuarioAlmacenado = JSON.parse(localStorage.getItem('usuarioGuardado') || '{}');

  //   if (
  //     usuarioAlmacenado.email === this.mail &&
  //     usuarioAlmacenado.password === this.password
  //   ) {
 
  //     this.router.navigate(['/home']);
  //   } else {

  //     this.errorMensaje = "Usuario Incorrecto. Si no tenes un usuario, registrate.";
  //   }
  // }

  // IngresarConGoogle() {

    
 
//  }

// iniciarSesion() {

// console.log(this.usuario);
// }



//   registrarse() {
//     this.router.navigate(['/registro']);
//   }


// async register (email: string, password: string){
//   try{
//     return await this.afauth.createUserWithEmailAndPassword(email, password);
    
  
//   }catch(error){ return null; }


async iniciarSesion() {
  if (this.form.valid) {
    const { email, password } = this.form.value;

    // Verificar si el usuario existe en Firestore antes de permitir el inicio de sesión
    const usuarioExiste = await this.authService.verificarUsuarioEnFirestore(email);

    if (usuarioExiste) {
      // El usuario existe en Firestore, intenta iniciar sesión
      const resultadoLogin = await this.authService.login(email, password);

      if (resultadoLogin) {
        console.log('Inicio de sesión exitoso', resultadoLogin);
        this.router.navigate(['/home']);
        this.errorMensaje = '';
      } else {
        console.log('Error al iniciar sesión.');
        this.errorMensaje = 'Error al iniciar sesión.';
      }
    } else {
      console.log('Usuario no encontrado en Firestore. Regístrate primero.');
      this.errorMensaje = 'Usuario no encontrado en Firestore. Regístrate primero.';
    }
  } else {
    this.errorMensaje = 'Por favor, verifica los campos del formulario.';
  }
}

IngresarConGoogle(){
  console.log(this.usuario);
  const {email, password} = this.usuario;
  this.authService.loginGoogle(email, password).then(res =>{
    console.log("se registro", res);
    this.errorMensaje = "";
    this.router.navigate(['/home']);
  }).catch(error =>{
    console.log("error", error);
    this.errorMensaje = error.message;
  })
}

// Registrarse(){
//   console.log(this.usuario);
//   const {email, password} = this.usuario;
//   this.authService.register(email, password).then(res =>{
//     console.log("se registro", res);
//     this.errorMensaje = "";
//   }).catch(error =>{
//     console.log("error", error);
//     this.errorMensaje = error.message;
//   })


ObtenerUsuarioLogeado()
{
  this.authService.getUserLogged().subscribe(res =>{
    console.log(res?.email);
  })

}

LogOut(){
    this.authService.logout();

  }

  reiniciar() {
    this.mail = "";
    this.password = "";
    this.errorMensaje = ""; 
  }
}