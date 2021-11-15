
import { UsuarioAuthenticated } from './response-authenticate.interface';
import { ConfigurarNotificacion } from './configurar-notificacion.interface';
import { Categoria } from './categoria.interface';

export interface Usuario extends UsuarioAuthenticated {
    perfilPublico?: boolean;
    categoriasOfrecidas?: Categoria[];
    configNotificaciones?: ConfigurarNotificacion[];
    idCertificacion?: string;
    urlCertificacion?: string;
    dtCertificacionUsuario?: any;
}
