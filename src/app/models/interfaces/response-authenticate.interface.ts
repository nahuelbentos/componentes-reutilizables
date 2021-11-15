export interface ResponseAuthenticate {
  jwtToken: string;
  usuario: UsuarioAuthenticated;
}

export interface UsuarioAuthenticated {
  id?: string;
  email?: string;
  password?: string;
  nombre?: string;
  fechaNacimiento?: Date;
  tokenPushNotification?: string;
  urlFoto?: string;
  bloqueado?: boolean;
  authProvider?: string;
  authorities?: Authority[];
}

export interface Authority {
  authority: string;
}
