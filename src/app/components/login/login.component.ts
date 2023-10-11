import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


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
 
  mail: string = "";
  password: string = "";
  errorMensaje: string = "";

constructor(private authService: AuthService) { }

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


iniciarSesion(){
  console.log(this.usuario);
  const {email, password} = this.usuario;
  this.authService.login(email, password).then(res =>{
    console.log("se registro", res);
    this.errorMensaje = "";
  }).catch(error =>{
    console.log("error", error);
    this.errorMensaje = error.message;
  })
}

IngresarConGoogle(){
  console.log(this.usuario);
  const {email, password} = this.usuario;
  this.authService.loginGoogle(email, password).then(res =>{
    console.log("se registro", res);
    this.errorMensaje = "";
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