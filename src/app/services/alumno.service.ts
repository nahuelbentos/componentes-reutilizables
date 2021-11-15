import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ALUMNOS } from 'src/assets/data';
import { Alumno } from '../models/interfaces/alumno.model';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  constructor() {}

  obtenerAlumnos = () => of<Alumno[]>(ALUMNOS);
}
