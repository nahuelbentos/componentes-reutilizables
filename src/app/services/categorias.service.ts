import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../models/interfaces/api-response.interface';

const URL = `${environment.url}/api/v1/categorias`;
const urlAdmin = `${environment.url}/backofficeapi/v1/categorias`;
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  constructor(private http: HttpClient ) {}

  eliminarCategoria = (idCategoria: string) => this.http.delete<APIResponse>(`${urlAdmin}/${idCategoria}`);

  getCategoriasAdmin = (pageNumber: number = 0, pageRecords: number = 500) => this.http.get<APIResponse>
    (`${urlAdmin}?pageNumber=${pageNumber}&pageRecords=${pageRecords}`);

}
