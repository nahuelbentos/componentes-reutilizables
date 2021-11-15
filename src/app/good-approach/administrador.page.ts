import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Menu } from '../models/interfaces/menu.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {
  public selectedIndex = 0;
  title = '';
  pages: Menu[] = [
    {
      title: 'Dashboard',
      url: '/administrador/metricas',
      icon: 'bar-chart',
    },
    {
      title: 'Gestión de administradores',
      url: '/administrador/gestion-administradores',
      icon: 'people',
    },
    {
      title: 'Gestión de categorias',
      url: '/administrador/gestion-categorias',
      icon: 'file-tray-stacked',
    },
    {
      title: 'Gestión de categorias pendientes',
      url: '/administrador/gestion-categorias-pendientes',
      icon: 'file-tray-stacked',
    },
    {
      title: 'Gestión de usuarios',
      url: '/administrador/gestion-usuarios',
      icon: 'people-circle',
    },
    {
      title: 'Gestión de certificaciones pendientes',
      url: '/administrador/confirmar-verificacion-perfiles',
      icon: 'people-circle',
    },
    {
      title: 'Gestión de alertas',
      url: '/administrador/gestion-alertas',
      icon: 'alert-circle',
    },
    {
      title: 'Volver al Feed',
      url: '/usuario-comun',
      icon: 'home',
    },
  ];

  constructor( private navController: NavController, private authService: AuthService) {}

  ngOnInit() {}

  logout() {
    this.authService.logout().subscribe( );

  }
}
