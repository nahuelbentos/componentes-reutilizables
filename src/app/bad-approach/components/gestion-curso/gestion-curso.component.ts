import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { MatSelectChange } from '@angular/material/select';
import { FormBuilder, FormGroup } from '@angular/forms';


import { environment } from '../../../../environments/environment';
import { CursoService } from 'src/app/services/curso.service';
import { confirmacionUsuario } from 'src/app/utils/sweet-alert';
import { Curso } from 'src/app/models/curso.model';

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
  ];
  dataSource: MatTableDataSource<Curso>;
  verCurso: boolean;
  filtro: string;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private cursoService: CursoService,
  ) {}

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'Items por Página';
    this.getCursos();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  abmCurso(modo: string, {nombre}: Curso) {
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
        ).then(({isConfirmed}) => {
          if (isConfirmed) {
            console.log('ABM Delete - Not implemented');
          }
        });

        break;
    }
  }

  getCursos() {
    this.verCurso = false;
    this.cursoService.obtenerCursos().subscribe((cursos: Curso[]) => {
      this.verCurso = true;
      this.dataSource = new MatTableDataSource(cursos);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }




}
