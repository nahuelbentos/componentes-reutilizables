import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestionUsuariosPageRoutingModule } from './gestion-usuarios-routing.module';

import { GestionUsuariosPage } from './gestion-usuarios.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GestionUsuariosPageRoutingModule,
    SharedModule,
  ],
  declarations: [GestionUsuariosPage]
})
export class GestionUsuariosPageModule {}
