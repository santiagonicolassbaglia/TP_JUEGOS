import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private afauth: AngularFireAuth) { }




  async login(email: string, password: string){
    try{
      return await this.afauth.signInWithEmailAndPassword(email, password);
   
    }catch(error){
      console.log("error en el loguin:", error);
      return null;
    }
  }


  async loginGoogle(email: string, password: string){
    try{
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); 
   
    }catch(error){
      console.log("error en el loguin con google:", error);
      return null;
    }
  }


  getUserLogged(){
    return this.afauth.authState;
  }

  logout(){
this.afauth.signOut();
  }
}
