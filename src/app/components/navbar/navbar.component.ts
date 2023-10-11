import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userLogged = this.authService.getUserLogged();
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  logOut(){
    this.authService.logout();
  }
}
