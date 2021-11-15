import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ToastController } from '../../../services/toast.controller';
import { Categoria } from '../../../models/interfaces/categoria.interface';
import { showToast } from '../../../utils/helper';
import { EliminarRow } from '../../../models/interfaces/eliminiar-row.interface';
import { Actions } from '../../../models/classes/actions.model';

@Component({
  selector: 'app-gestion-categorias',
  templateUrl: './gestion-categorias.page.html',
  styleUrls: ['./gestion-categorias.page.scss'],
})
export class GestionCategoriasPage implements OnInit {
  categorias: Categoria[] = [];
  columnas: string[] = ['nombre', 'descripcion', 'actions'];
  actions: Actions[];

  constructor(
    private categoriasService: CategoriasService,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {
    this.actions = [
      {
        tooltip: `Editar categoría`,
        mode: 'UPD',
        className: 'button-editar',
        tooltipClassName: 'tooltip-blue',
        icon: 'edit',
      },
      {
        tooltip: `Eliminar categoría`,
        mode: 'DLT',
        className: 'button-eliminar',
        tooltipClassName: 'tooltip-red',
        icon: 'delete',
      },
    ];

    this.getCategorias();
  }

  getCategorias() {
    this.categoriasService
      .getCategoriasAdmin()
      .subscribe((response) => (this.categorias = response.data));
  }

  async onEliminar(data: EliminarRow) {
    if (data.elimino) {
      this.categoriasService.eliminarCategoria(data.id).subscribe(async () => {
        this.categoriasService
          .getCategoriasAdmin()
          .subscribe((res) => (this.categorias = res.data));
        await showToast(
          'Categoría eliminada exitosamente.',
          this.toastController
        );
      });
    }
  }
}
