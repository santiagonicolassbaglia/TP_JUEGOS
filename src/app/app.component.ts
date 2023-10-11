import { Component, OnInit  } from '@angular/core';
import { Usuario } from './clases/usuario';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  title = 'Santiago Sbaglia';
  userLogged = this.authService.getUserLogged();
  
    
  usuario: Usuario;

  

 
  constructor(private authService: AuthService) {
    this.usuario = Usuario.traerDeLocalStorage() || Usuario.CrearUsuarioVacio();
   }

  ngOnInit(): void {
  }
  logOut(){
    this.authService.logout();
  }
}
