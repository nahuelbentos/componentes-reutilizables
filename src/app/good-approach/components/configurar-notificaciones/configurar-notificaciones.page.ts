import { Component, OnInit } from '@angular/core';
import { UsuarioComunService } from '../../../services/usuario-comun.service';
import { AuthService } from '../../../services/auth.service';
import { ConfigurarNotificacion } from '../../../models/interfaces/configurar-notificacion.interface';
import { TipoNotificacion } from '../../../models/enums/tipo-notificacion.enum';
import { catchError } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { getIsDesktop } from '../../../utils/helpers';

@Component({
    selector: 'app-configurar-notificaciones',
    templateUrl: './configurar-notificaciones.page.html',
    styleUrls: ['./configurar-notificaciones.page.scss'],
})
export class ConfigurarNotificacionesPage implements OnInit {
    configurarNotificaciones: ConfigurarNotificacion[];
    tipoNotificaciones: TipoNotificacion[];
    isDesktop: boolean;

    constructor(
        private platform: Platform,
        private authService: AuthService,
        private usuarioComunService: UsuarioComunService
    ) {}

    ngOnInit() {
        this.isDesktop = getIsDesktop(this.platform);
        this.authService.getUsuario().then(({ id }) => {
            this.usuarioComunService
                .getUsuarioComunById(id)
                .subscribe(({ data }) => {
                    this.configurarNotificaciones =
                        data.configNotificaciones.map((item) => ({
                            ...item,
                            callback: this.guardarNotificacion,
                        }));
                });
        });
    }

    guardarNotificacion = (
        configurarNotificacion: ConfigurarNotificacion,
        id: string
    ) =>
        this.usuarioComunService
            .configurarNotificaciones(configurarNotificacion, id)
            .subscribe((res) => console.log(res));

    getTitle = (title: string) => this.isDesktop ? title : `${title.substr(32, 1).toLocaleUpperCase()}${title.substring(33,title.length)}`;
}
