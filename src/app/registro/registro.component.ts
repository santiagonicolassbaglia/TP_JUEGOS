import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  form: FormGroup;
  registroExitoso: boolean = false;

  constructor(private router: Router, private fb: FormBuilder,  private angularFirestore: AngularFirestore) {
    this.form = fb.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      tipo: new FormControl('1', Validators.required),
      sexo: new FormControl('1', Validators.required),
      foto: new FormControl('')
    });
  }

  registrar() {
    if (this.form.valid) {
      // Procede con el registro
      this.registroExitoso = true;
      this.router.navigate(['/login']);
    } else {
      // Mostrar errores en el formulario
      this.form.markAllAsTouched();
    }
  }


  guardar() {
    const col = this.angularFirestore.collection('usuarios');
    col.add(this.form.value).then((docRef) => {
      console.log("Documento agregado con ID: ", docRef.id);
    }).catch((error) => {
      console.error("Error al agregar documento: ", error);
    });
  }
}