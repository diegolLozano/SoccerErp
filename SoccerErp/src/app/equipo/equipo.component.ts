import { Component, OnInit } from '@angular/core';
import { Equipo } from '../models/equipo';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {
  equipos: Equipo[];

  constructor() { }

  ngOnInit() {
    this.equipos = [
      {
        Id: 1,
        Nombre: 'Juventus',
        Capitan: 'Luis Miramontes',
        TelefonoContacto: '3345367890',
        Comentarios: 'Sin Adeudos',
        GolesFavor: 30,
        GolesContra: 8
      },
      {
        Id: 2,
        Nombre: 'Barcelona',
        Capitan: 'Juan Perez',
        TelefonoContacto: '3342567890',
        Comentarios: 'No se presento jornada 4',
        GolesFavor: 28,
        GolesContra: 10
      },
      {
        Id: 3,
        Nombre: 'Real Madrid',
        Capitan: 'Rodrigo Mendoza',
        TelefonoContacto: '3367896543',
        Comentarios: 'Cuenta con jugador suspendido',
        GolesFavor: 36,
        GolesContra: 18
      },
      {
        Id: 4,
        Nombre: 'Manchester United',
        Capitan: 'Ricardo Gonzalez',
        TelefonoContacto: '3333212567',
        Comentarios: '',
        GolesFavor: 40,
        GolesContra: 28
      },
      {
        Id: 5,
        Nombre: 'Bayern Munich',
        Capitan: 'Marcos Gonzalez',
        TelefonoContacto: '3367658900',
        Comentarios: 'Juego Pendiente',
        GolesFavor: 30,
        GolesContra: 48
      },
      {
        Id: 5,
        Nombre: 'Manchester City',
        Capitan: 'Felix Alba',
        TelefonoContacto: '3367658900',
        Comentarios: 'Juego Pendiente',
        GolesFavor: 50,
        GolesContra: 48
      },
      {
        Id: 6,
        Nombre: 'Porto',
        Capitan: 'Felix Alba',
        TelefonoContacto: '3367658900',
        Comentarios: 'Adeudos',
        GolesFavor: 20,
        GolesContra: 48
      },
      {
        Id: 7,
        Nombre: 'PSG',
        Capitan: 'Alexis Juarez',
        TelefonoContacto: '3367658900',
        Comentarios: '',
        GolesFavor: 25,
        GolesContra: 25
      },
      {
        Id: 8,
        Nombre: 'Tigres',
        Capitan: 'Jorge Treviño',
        TelefonoContacto: '3367658900',
        Comentarios: 'Sin Comentarios',
        GolesFavor: 25,
        GolesContra: 25
      },
      {
        Id: 9,
        Nombre: 'Boca Juniors',
        Capitan: 'Oscar Sanchez',
        TelefonoContacto: '3367658900',
        Comentarios: 'Documentos pendientes',
        GolesFavor: 25,
        GolesContra: 25
      }
    ];
  }

}
