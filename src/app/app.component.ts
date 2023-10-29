import { Component, OnInit, Renderer2, Inject   } from '@angular/core';
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

  

 
  constructor(private authService: AuthService, private renderer: Renderer2) {
    this.usuario = Usuario.traerDeLocalStorage() || Usuario.CrearUsuarioVacio();
    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'rel', 'icon');
    this.renderer.setAttribute(link, 'type', 'image/x-icon');
    this.renderer.setAttribute(link, 'href', 'assets/img/favicon.ico');
    this.renderer.appendChild(document.head, link);
  }

  ngOnInit(): void {
  }
  logOut(){
    this.authService.logout();
  }
}
