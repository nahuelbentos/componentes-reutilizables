import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurarNotificacionesPage } from './configurar-notificaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurarNotificacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurarNotificacionesPageRoutingModule {}
