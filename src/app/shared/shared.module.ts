import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { GestionCustomComponent } from './components/gestion-custom/gestion-custom.component';



@NgModule({
  declarations: [GestionCustomComponent],
  exports: [GestionCustomComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
