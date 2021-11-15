import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { confirmacionUsuario } from 'src/app/utils/sweet-alert';
import { MovilService } from 'src/app/services/movil.service';
import { Movil } from '../../../models/interfaces/movil.model';

@Component({
  selector: 'app-gestion-movil',
  templateUrl: './gestion-movil.component.html',
  styleUrls: ['./gestion-movil.component.scss'],
})
export class GestionMovilComponent implements OnInit {
  displayedColumns: string[] = [
    'actions',
    'id',
    'estado',
    'matricula'
  ];

  dataSource: MatTableDataSource<Movil>;
  verMovil: boolean;
  filtro: string;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private movilService: MovilService) {}

  ngOnInit() {
    this.getMoviles();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  abmMovil(modo: string, { id }: Movil) {
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
          `Está seguro que desea eliminar el movil: ${id}`
        ).then(({ isConfirmed }) => {
          if (isConfirmed) {
            console.log('ABM Delete - Not implemented');
          }
        });
        break;
    }
  }

  getMoviles() {
    this.verMovil = false;
    this.movilService
      .obtenerMoviles()
      .subscribe((moviles: Movil[]) => this.actualizarDatasource(moviles));
  }

  actualizarDatasource(data) {
    this.dataSource = data.alumnos;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.verMovil = true;
  }
}
