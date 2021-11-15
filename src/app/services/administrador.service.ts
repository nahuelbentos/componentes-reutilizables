import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APIResponse } from '../models/interfaces/api-response.interface';
import { Usuario } from '../models/interfaces/usuario.interface';
import { environment } from '../../environments/environment';

const URL = `${environment.url}/backofficeapi/v1/usuarios`;

@Injectable({
  providedIn: 'root',
})
export class AdministradorService {
  constructor(private http: HttpClient) {}
  //TODO: Paginacion funciona distinto que en el infinite scroll, hay que ver como resolverlo
  getUsuarios = (
    rol?: string,
    pageNumber: number = 0,
    pageRecords: number = 100
  ) =>
    this.http
      .get<APIResponse>(
        `${URL}?pageNumber=${pageNumber}&pageRecords=${pageRecords}${
          rol ? '&rol=' + rol : ''
        }`
      )
      .pipe(map(({ data }) => data as Usuario[]));


  deleteUsuario = (id: string) => this.http.delete<APIResponse>(`${URL}/${id}`);

  toggleBloqueado = (email: string, nuevoEstado: boolean) =>
    this.http.post<APIResponse>(
      `${URL}/${email}/toggle-bloqueado/${nuevoEstado}`,
      nuevoEstado
    );
}
