import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GestionCategoriasPageRoutingModule } from './gestion-categorias-routing.module';

import { GestionCategoriasPage } from './gestion-categorias.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GestionCategoriasPageRoutingModule,

    SharedModule,
  ],
  declarations: [GestionCategoriasPage]
})
export class GestionCategoriasPageModule {}
