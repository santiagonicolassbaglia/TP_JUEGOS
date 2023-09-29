import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignaturasRoutingModule } from './asignaturas-routing.module';
import { AsignaturasComponent } from './asignaturas.component';


@NgModule({
  declarations: [
    AsignaturasComponent
  ],
  imports: [
    CommonModule,
    AsignaturasRoutingModule
  ]
})
export class AsignaturasModule { }
