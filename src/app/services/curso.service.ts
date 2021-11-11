import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CURSOS } from 'src/assets/data';
import { Curso } from '../models/curso.model';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  constructor() {}

  obtenerCursos = () => of<Curso[]>(CURSOS);
}
