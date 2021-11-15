import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from '../models/interfaces/api-response.interface';
import { ConfigurarNotificacion } from '../models/interfaces/configurar-notificacion.interface';

const URL = `${environment.url}/api/v1/usuarios`;

@Injectable({
  providedIn: 'root',
})
export class UsuarioComunService {
  constructor(private http: HttpClient) {}


  configurarNotificaciones = (
    configurarNotificacion: ConfigurarNotificacion,
    id: string
  ) =>
    this.http.put(
      `${environment.url}/api/v1/notificaciones/${id}`,
      configurarNotificacion
    );

  getUsuarioComunById = (id: string) =>
    this.http.get<APIResponse>(`${URL}/${id}`);
}
