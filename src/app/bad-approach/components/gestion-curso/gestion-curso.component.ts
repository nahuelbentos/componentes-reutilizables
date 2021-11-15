import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { confirmacionUsuario } from 'src/app/utils/sweet-alert';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from '../../../models/interfaces/curso.model';

@Component({
  selector: 'app-gestion-curso',
  templateUrl: './gestion-curso.component.html',
  styleUrls: ['./gestion-curso.component.scss'],
})
export class GestionCursoComponent implements OnInit {
  displayedColumns: string[] = [
    'actions',
    'id',
    'nombre',
    'duracion'
  ];

  dataSource: MatTableDataSource<Curso>;
  verCurso: boolean;
  filtro: string;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private cursoService: CursoService) {}

  ngOnInit() {
    this.getCursos();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  abmCurso(modo: string, { nombre }: Curso) {
    switch (modo) {
      case 'INS':
        console.log('ABM Insert - Not implemented');
        break;
      case 'UPD':
        console.log('ABM Update - Not implemented');
        break;
      case 'DLT':
        confirmacionUsuario(
          'Confirmación de Usuario',
          `Está seguro que desea eliminar el curso: ${nombre}`
        ).then(({ isConfirmed }) => {
          if (isConfirmed) {
            console.log('ABM Delete - Not implemented');
          }
        });
        break;
    }
  }

  getCursos() {
    this.verCurso = false;
    this.cursoService
      .obtenerCursos()
      .subscribe((cursos: Curso[]) => this.actualizarDatasource(cursos));
  }

  actualizarDatasource(data) {
    this.dataSource = data.alumnos;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.verCurso = true;
  }
}
