import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministradorPageRoutingModule } from './administrador-routing.module';

import { AdministradorPage } from './administrador.page';
import { SharedModule } from '../shared/shared.module';
import { AdministradorComponentsModule } from './components/administrador.components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministradorPageRoutingModule,
    AdministradorComponentsModule
  ],
  declarations: [AdministradorPage]
})
export class AdministradorPageModule {}
