import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {


  public form: FormGroup;

  public constructor(private fb: FormBuilder) {
    this.form = fb.group({
      nombre: [
        '',
        [
          Validators.minLength(6),
          Validators.required,
          Validators.maxLength(15),
          this.spacesValidator,
        ],
      ],
    });
  }

  private spacesValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    if (spaces) {
      return { contieneEspacios: { cantidadDeEspacios: 5 } };
    } else {
      return null;
    }
  }


}
