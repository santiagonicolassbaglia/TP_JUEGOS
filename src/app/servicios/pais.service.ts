import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  timer : number = 0;

  constructor() { }

iniciar (inicio : number) {
  this.timer = inicio;
}

sumar() {
  this.timer++; }

restar() {
  this.timer--; }

}

