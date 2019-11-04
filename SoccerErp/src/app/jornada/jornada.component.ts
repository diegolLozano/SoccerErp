import { Component, OnInit } from '@angular/core';
import { Jornada } from '../models/jornada';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.component.html',
  styleUrls: ['./jornada.component.scss']
})
export class JornadaComponent implements OnInit {

  jornadas: Jornada[];

  constructor() { }

  ngOnInit() {
    this.jornadas = [
      {
        Id: 1,
        Descripcion : 'Jornada 1',
        FechaInicio: new Date(),
        FechaFinal: new Date(),
        Partidos: [
          {
            Id: 1,
            Equipo1: 'Juventus',
            Equipo2: 'Manchester',
            EquipoGanador: {
              Id: 1,
              Nombre: 'Juventus',
              Capitan: 'Luis Miramontes',
              TelefonoContacto: '3345367890',
              Comentarios: 'Sin Adeudos',
              GolesFavor: 30,
              GolesContra: 8
            },
            EquipoPerdedor: {
              Id: 4,
              Nombre: 'Manchester United',
              Capitan: 'Ricardo Gonzalez',
              TelefonoContacto: '3333212567',
              Comentarios: '',
              GolesFavor: 40,
              GolesContra: 28
            },
            Empate: false,
            GolesEquipo1: 2,
            GolesEquipo2: 0,
            Anotadores: [],
            Expulsados: [],
            Fecha: new Date(),
          },
          {
            Id: 2,
            Equipo1: 'Barcelona',
            Equipo2: 'Real Madrid',
            EquipoGanador: {
              Id: 2,
              Nombre: 'Barcelona',
              Capitan: 'Juan Perez',
              TelefonoContacto: '3342567890',
              Comentarios: 'No se presento jornada 4',
              GolesFavor: 28,
              GolesContra: 10
            },
            EquipoPerdedor: {
              Id: 3,
              Nombre: 'Real Madrid',
              Capitan: 'Rodrigo Mendoza',
              TelefonoContacto: '3367896543',
              Comentarios: 'Cuenta con jugador suspendido',
              GolesFavor: 36,
              GolesContra: 18
            },
            Empate: false,
            GolesEquipo1: 1,
            GolesEquipo2: 0,
            Anotadores: [],
            Expulsados: [],
            Fecha: new Date(),
          },
          {
            Id: 2,
            Equipo1: 'Porto',
            Equipo2: 'Manchester City',
            EquipoGanador: {
              Id: 5,
              Nombre: 'Manchester City',
              Capitan: 'Felix Alba',
              TelefonoContacto: '3367658900',
              Comentarios: 'Juego Pendiente',
              GolesFavor: 50,
              GolesContra: 48
            },
            EquipoPerdedor: {
              Id: 6,
              Nombre: 'Porto',
              Capitan: 'Felix Alba',
              TelefonoContacto: '3367658900',
              Comentarios: 'Adeudos',
              GolesFavor: 20,
              GolesContra: 48
            },
            Empate: false,
            GolesEquipo1: 2,
            GolesEquipo2: 4,
            Anotadores: [],
            Expulsados: [],
            Fecha: new Date(),
          },
          {
            Id: 4,
            Equipo1: 'Manchester United',
            Equipo2: 'PSG',
            EquipoGanador: {
              Id: 4,
              Nombre: 'Manchester United',
              Capitan: 'Ricardo Gonzalez',
              TelefonoContacto: '3333212567',
              Comentarios: '',
              GolesFavor: 40,
              GolesContra: 28
            },
            EquipoPerdedor: {
              Id: 7,
              Nombre: 'PSG',
              Capitan: 'Alexis Juarez',
              TelefonoContacto: '3367658900',
              Comentarios: '',
              GolesFavor: 25,
              GolesContra: 25
            },
            Empate: true,
            GolesEquipo1: 2,
            GolesEquipo2: 4,
            Anotadores: [],
            Expulsados: [],
            Fecha: new Date(),
          },
          {
            Id: 4,
            Equipo1: 'Tigres',
            Equipo2: 'Boca Juniors',
            EquipoGanador: {
              Id: 8,
              Nombre: 'Tigres',
              Capitan: 'Jorge Treviño',
              TelefonoContacto: '3367658900',
              Comentarios: 'Sin Comentarios',
              GolesFavor: 25,
              GolesContra: 25
            },
            EquipoPerdedor: {
              Id: 9,
              Nombre: 'Boca Juniors',
              Capitan: 'Oscar Sanchez',
              TelefonoContacto: '3367658900',
              Comentarios: 'Documentos pendientes',
              GolesFavor: 25,
              GolesContra: 25
            },
            Empate: true,
            GolesEquipo1: 2,
            GolesEquipo2: 2,
            Anotadores: [],
            Expulsados: [],
            Fecha: new Date(),
          }
        ]
      }
    ];
  }

}
