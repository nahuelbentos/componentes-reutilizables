import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Actions } from 'src/app/models/classes/actions.model';
import { EliminarRow } from 'src/app/models/interfaces/eliminiar-row.interface';
import { Usuario } from 'src/app/models/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/services/usuario.service';
import { showToast } from '../../../utils/helpers';
import { AdministradorService } from '../../../services/administrador.service';
import { Roles } from 'src/app/models/enums/roles.enum';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.page.html',
  styleUrls: ['./gestion-usuarios.page.scss'],
})
export class GestionUsuariosPage implements OnInit {
  usuarios: Usuario[] = [];
  columnas: string[] = ['nombre', 'email', 'actions'];
  actions: Actions[] = null;
  actionsHeader: Actions[] = null;

  constructor(
    private administradorService: AdministradorService,
    private toastController: ToastController,
  ) {}

  ngOnInit(): void {
    this.actions = [
      {
        tooltip: `Eliminar usuario`,
        mode: 'DLT',
        className: 'button-eliminar',
        tooltipClassName: 'tooltip-red',
        icon: 'delete',
      },
      {
        tooltip: `Bloquear usuario`,
        className: 'button-editar',
        tooltipClassName: 'tooltip-blue',
        icon: 'lock',
        callback: this.bloquearUsuario,
      },
      {
        tooltip: `Desbloquear usuario`,
        className: 'button-editar',
        tooltipClassName: 'tooltip-blue',
        icon: 'lock_open',
        callback: this.desbloquearUsuario,
      },
    ];
  }

  ionViewWillEnter() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.administradorService
      .getUsuarios(Roles.UsuarioComun)
      .subscribe((usuarios) => (this.usuarios = usuarios));
  }
  async onEliminar(data: EliminarRow) {
    if (data.elimino) {
      this.administradorService.deleteUsuario(data.id).subscribe(async () => {
        this.getUsuarios();
        await showToast(
          'Usuario eliminado exitosamente.',
          this.toastController
        );
      });
    }
  }

  bloquearUsuario = async (usuario: Usuario) => {
    if (usuario.bloqueado) {
      await showToast('Usuario ya fue bloqueado.', this.toastController);
    } else {
      this.administradorService
        .toggleBloqueado(usuario.email, true)
        .subscribe(async () => {
          this.getUsuarios();
          await showToast('Usuario bloqueado.', this.toastController);
        });
    }
  };

  desbloquearUsuario = async (usuario: Usuario) => {
    if (!usuario.bloqueado) {
      await showToast('Usuario ya fue desbloqueado.', this.toastController);
    } else {
      this.administradorService
        .toggleBloqueado(usuario.email, false)
        .subscribe(async () => {
          this.getUsuarios();
          await showToast('Usuario desbloqueado.', this.toastController);
        });
    }
  };
}
