import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Movil } from '../models/movil.model';
import { MOVILES } from '../../assets/data';

@Injectable({
  providedIn: 'root',
})
export class MovilService {
  constructor() {}

  obtenerMoviles = () => of<Movil[]>(MOVILES);
}
