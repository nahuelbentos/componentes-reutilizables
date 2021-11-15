import { Usuario } from './usuario.interface';
import { TipoNotificacion } from '../enums/tipo-notificacion.enum';
export interface ConfigurarNotificacion {
  id?: string;
  tipoNotif?: TipoNotificacion;
  recibePorMail?: boolean;
  recibePorPush?: boolean;
  callback?: any;
  titulo?: string;
  usuario?: Usuario;
}
