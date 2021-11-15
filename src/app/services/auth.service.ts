import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/interfaces/usuario.interface';

const URL = environment.url;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storage: Storage) {}

  getUsuario = async (): Promise<Usuario> => await this.storage.get('usuario');
}
