import Swal, { SweetAlertIcon } from 'sweetalert2';

export const confirmacionUsuario = (title, text) =>
  Swal.fire({
    title,
    text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
  });

export const mensajeConfirmacion = (title, text) =>
  Swal.fire({
    title,
    text,
    icon: 'success',
    timer: 5000,
    showConfirmButton: false,
  });

export const mensajeWarning = (title, text, timer = 5000, html = null) =>
  Swal.fire({
    title,
    text,
    icon: 'warning',
    timer,
    showConfirmButton: false,
    confirmButtonText: 'Confirmar',
    html,
  });

export const errorMensaje = (title, text) =>
  Swal.fire({
    title,
    text,
    icon: 'error',
    timer: 5000,
    showConfirmButton: false,
  });

export const customMensaje = (
  title: string,
  text: string,
  icon: SweetAlertIcon,
  timer: number,
  showConfirmButton: boolean,
  confirmButtonText: string,
  cancelButtonText: string
) =>
  Swal.fire({
    title,
    text,
    icon,
    timer,
    showConfirmButton,
    confirmButtonText,
    cancelButtonText,
  });
