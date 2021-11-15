import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministradorPage } from './administrador.page';

const routes: Routes = [
  {
    path: '',
    component: AdministradorPage,
    children: [
      {
        path: 'metricas',
        loadChildren: () =>
          import('./pages/metricas/metricas.module').then(
            m => m.MetricasPageModule
          ),
      },
      {
        path: 'gestion-categorias',
        loadChildren: () =>
          import('./pages/gestion-categorias/gestion-categorias.module').then(
            (m) => m.GestionCategoriasPageModule
          ),
      },
      {
        path: 'gestion-administradores',
        loadChildren: () =>
          import(
            './pages/gestion-administradores/gestion-administradores.module'
          ).then((m) => m.GestionAdministradoresPageModule),
      },
      {
        path: 'gestion-usuarios',
        loadChildren: () =>
          import('./pages/gestion-usuarios/gestion-usuarios.module').then(
            (m) => m.GestionUsuariosPageModule
          ),
      },
      {
        path: 'gestion-administradores/abm-administrador',
        loadChildren: () =>
          import('./pages/abm-administrador/abm-administrador.module').then(
            (m) => m.AbmAdministradorPageModule
          ),
      },
      {
        path: 'gestion-categorias/abm-categoria',
        loadChildren: () => import('./pages/abm-categoria/abm-categoria.module').then( m => m.AbmCategoriaPageModule)
      },
      {
        path: 'gestion-alertas',
        loadChildren: () => import('./pages/gestion-alertas/gestion-alertas.module').then( m => m.GestionAlertasPageModule)
      },
      {
        path: 'gestion-alertas/abm-alerta',
        loadChildren: () => import('./pages/abm-alertas/abm-alertas.module').then( m => m.AbmAlertasPageModule)
      },
      {
        path: 'gestion-categorias-pendientes',
        loadChildren: () => import('./pages/gestion-categorias-pendientes/gestion-categorias-pendientes.module')
          .then( m => m.GestionCategoriasPendientesPageModule)
      },
      {
        path: 'confirmar-verificacion-perfiles',
        loadChildren: () => import('./pages/confirmar-verificacion-perfiles/confirmar-verificacion-perfiles.module')
          .then( m => m.ConfirmarVerificacionPerfilesPageModule)
      }
    ],
  },
  {
    path:'**',
    redirectTo:''
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorPageRoutingModule {}
