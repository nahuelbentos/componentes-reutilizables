import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '../../../../environments/environment.prod';
import { Alumno } from '../../../models/alumno.model';
import { AlumnoService } from '../../../services/alumno.service';
import { confirmacionUsuario } from 'src/app/utils/sweet-alert';

@Component({
  selector: 'app-gestion-alumno',
  templateUrl: './gestion-alumno.component.html',
  styleUrls: ['./gestion-alumno.component.scss'],
})
export class GestionAlumnoComponent implements OnInit {
  displayedColumns: string[] = [
    'actions',
    'AluNro',
    'AluNomComp',
    'AluCI',
    'inscripciones',
  ];

  dataSource: MatTableDataSource<Alumno>;
  verAlumnos: boolean;
  filtro: string;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private alumnoService: AlumnoService,
    private router: Router,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {}


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

  abmAlumno(modo: string, {nombre}: Alumno) {
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
        ).then(({isConfirmed}) => {
          if (isConfirmed) {
            console.log('ABM Update - Not implemented');
          }
        });
        break;
    }
  }

  getAlumnos(filtro?: string) {
    this.verAlumnos = false;
    this.alumnoService
      .obtenerAlumnos()
      .subscribe(alumnos =>  this.actualizarDatasource(alumnos));
  }

  actualizarDatasource(data) {
    this.dataSource = data.alumnos;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
