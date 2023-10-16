
 
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afauth: AngularFireAuth,
    private angularFirestore: AngularFirestore
  ) { }




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



  async verificarUsuarioEnFirestore(email: string): Promise<boolean> {
    try {
      const userRef = this.angularFirestore.collection('usuarios', ref => ref.where('email', '==', email));
      const result = await userRef.get().toPromise();

      if (result) {
        return !result.empty;
      } else {
        console.error('No se encontró ningún resultado en Firestore.');
        return false;
      }
    } catch (error) {
      console.error('Error al verificar usuario en Firestore', error);
      return false;
    }}
}
