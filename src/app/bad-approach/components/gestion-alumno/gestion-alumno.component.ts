import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { confirmacionUsuario } from 'src/app/utils/sweet-alert';
import { AlumnoService } from '../../../services/alumno.service';
import { Alumno } from '../../../models/interfaces/alumno.model';

@Component({
  selector: 'app-gestion-alumno',
  templateUrl: './gestion-alumno.component.html',
  styleUrls: ['./gestion-alumno.component.scss'],
})
export class GestionAlumnoComponent implements OnInit {
  displayedColumns: string[] = [
    'actions',
    'numero',
    'nombre',
    'direccion',
  ];

  dataSource: MatTableDataSource<Alumno>;
  verAlumnos: boolean;
  filtro: string;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit() {
    this.getAlumnos();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  abmAlumno(modo: string, { nombre }: Alumno) {
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
          `Está seguro que desea eliminar el alumno: ${nombre}`
        ).then(({ isConfirmed }) => {
          if (isConfirmed) {
            console.log('ABM Update - Not implemented');
          }
        });
        break;
    }
  }

  getAlumnos() {
    this.verAlumnos = false;
    this.alumnoService
      .obtenerAlumnos()
      .subscribe((alumnos) => this.actualizarDatasource(alumnos));
  }

  actualizarDatasource(data) {
    this.dataSource = data.alumnos;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.verAlumnos = true;
  }
}
