import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSelectChange } from '@angular/material/select';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Movil } from 'src/app/models/movil.model';
import { MovilService } from 'src/app/services/movil.service';
import { confirmacionUsuario, mensajeConfirmacion } from 'src/app/utils/sweet-alert';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gestion-movil',
  templateUrl: './gestion-movil.component.html',
  styleUrls: ['./gestion-movil.component.scss'],
})
export class GestionMovilComponent implements OnInit {
  displayedColumns: string[] = ['actions', 'id', 'estado'];
  dataSource: MatTableDataSource<Movil>;
  filtro: string;
  verMovil = false;
  estados = [];


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private movilService: MovilService,
  ) {}

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

  abmMovil(modo: string, {id}: Movil) {
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
        ).then(({isConfirmed}) => {
          if (isConfirmed) {
            console.log('ABM Delete - Not implemented');
          }
        });

        break;
    }
  }

  getMoviles() {
    this.verMovil = false;
    this.movilService.obtenerMoviles().subscribe((moviles: Movil[]) => {

      this.verMovil = true;
      this.dataSource = new MatTableDataSource(moviles);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


}
