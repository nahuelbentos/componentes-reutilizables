import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurarNotificacionesPageRoutingModule } from './configurar-notificaciones-routing.module';

import { ConfigurarNotificacionesPage } from './configurar-notificaciones.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurarNotificacionesPageRoutingModule,
    SharedModule
  ],
  declarations: [ConfigurarNotificacionesPage]
})
export class ConfigurarNotificacionesPageModule {}
