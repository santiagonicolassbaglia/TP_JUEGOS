import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Juego2Service {
  api: string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {

  }

  todos(): Observable<any> {
    return this.http.get(this.api + 'all');
    
  }

  pais(nombrePais:string): Observable<any>{
    return this.http.get(this.api +'name/' + nombrePais);
    
  }

}
