import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juego2Service } from '../juego2.service';
 

@Component({
  selector: 'app-juego2',
  templateUrl: './juego2.component.html',
  styleUrls: ['./juego2.component.css']
})
export class Juego2Component implements OnInit {
  misBanderas:any[]|undefined;
  misPaises:Observable<any>|undefined;
  constructor(private servBandea: Juego2Service, private http :HttpClient) {
    
   }
   bandera:string="";
  ngOnInit(): void {
    this.servBandea.todos().subscribe(
      banderas=>{
        console.info(banderas);  
      this.misBanderas = banderas; 
    }  );
    
    this.misPaises = this.servBandea.todos();
    
  }

  buscarPais(nombre:string){
    this.servBandea.pais(nombre).subscribe(t=>
        this.bandera = t[0].flags.png
      )

  }
}
