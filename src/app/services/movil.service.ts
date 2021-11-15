import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MOVILES } from '../../assets/data';
import { Movil } from '../models/interfaces/movil.model';

@Injectable({
  providedIn: 'root',
})
export class MovilService {
  constructor() {}

  obtenerMoviles = () => of<Movil[]>(MOVILES);
}
