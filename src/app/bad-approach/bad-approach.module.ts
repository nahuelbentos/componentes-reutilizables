import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadApproachRoutingModule } from './bad-approach-routing.module';
import { GestionAlumnoComponent } from './components/gestion-alumno/gestion-alumno.component';
import { GestionCursoComponent } from './components/gestion-curso/gestion-curso.component';
import { GestionMovilComponent } from './components/gestion-movil/gestion-movil.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionAlumnoComponent,
    GestionCursoComponent,
    GestionMovilComponent
  ],
  imports: [
    CommonModule,
    BadApproachRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class BadApproachModule { }
