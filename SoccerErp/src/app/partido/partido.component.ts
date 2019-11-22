import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Partido } from '../models/partido';
import { Anotador } from '../models/anotador';
import { Amonestado } from '../models/amonestado';
import { Expulsado } from '../models/expulsado';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.scss']
})
export class PartidoComponent implements OnInit {
  partidoId: number;
  partidos: Partido[];
  partido: Partido;
  anotadoresEquipo1: Anotador[];
  anotadoresEquipo2: Anotador[];
  amonestados: Amonestado[];
  expulsados: Expulsado[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.partidos = [
      {
        Id: 1,
        Equipo1Nombre: 'Juventus',
        Equipo2Nombre: 'Manchester',
        Equipo1: {
          Id: 1,
          Nombre: 'Juventus',
          Capitan: 'Luis Miramontes',
          TelefonoContacto: '3345367890',
          Comentarios: 'Sin Adeudos',
          GolesFavor: 30,
          GolesContra: 8
        },
        Equipo2: {
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
        Anotadores: [
          {
            Id: 1,
            EquipoGanador: true,
            NumeroDeGoles: 1,
            Comentarios: '',
            Jugador: {
              Id: 3,
              Nombre: 'Christian',
              ApellidoPaterno: 'Avalos',
              ApellidoMaterno: '',
              Edad: 32,
              Numero: 3,
              Suspendido: false,
              Posicion: 'Defensa',
              Equipo: {
                Id: 1,
                Nombre: 'Juventus',
                Capitan: 'Luis Miramontes'
              }
            }
          },
          {
            Id: 2,
            EquipoGanador: true,
            NumeroDeGoles: 1,
            Comentarios: '',
            Jugador: {
              Id: 6,
              Nombre: 'Hugo',
              ApellidoPaterno: 'Gonzalez',
              ApellidoMaterno: '',
              Edad: 29,
              Numero: 6,
              Suspendido: true,
              Posicion: 'Medio',
              Equipo: {
                Id: 1,
                Nombre: 'Juventus',
                Capitan: 'Luis Miramontes'
              }
            }
          }
        ],
        Expulsados: [],
        Jornada: {}
      },
      {
        Id: 2,
        Equipo1Nombre: 'Barcelona',
        Equipo2Nombre: 'Real Madrid',
        Equipo1: {
          Id: 2,
          Nombre: 'Barcelona',
          Capitan: 'Juan Perez',
          TelefonoContacto: '3342567890',
          Comentarios: 'No se presento jornada 4',
          GolesFavor: 28,
          GolesContra: 10
        },
        Equipo2: {
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
        Anotadores: [
          {
            Id: 3,
            EquipoGanador: true,
            NumeroDeGoles: 1,
            Jugador: {
              Id: 4,
              Nombre: 'Luis',
              ApellidoPaterno: 'Miramontes',
              ApellidoMaterno: '',
              Edad: 36,
              Numero: 4,
              Suspendido: false,
              Posicion: 'Defensa',
              Equipo: {
                Id: 2,
                Nombre: 'Barcelona',
                Capitan: 'Juan Perez'
              }
            }
          }
        ],
        Expulsados: [
          {
            Id: 1,
            DobleAmarilla: true,
            Comentarios: '',
            Jugador: {
              Id: 6,
              Nombre: 'Hugo',
              ApellidoPaterno: 'Gonzalez',
              ApellidoMaterno: '',
              Edad: 29,
              Numero: 6,
              Suspendido: true,
              Posicion: 'Medio',
              Equipo: {
                Id: 1,
                Nombre: 'Juventus',
                Capitan: 'Luis Miramontes'
              }
            }
          }
        ],
        Amonestados: [
          {
            Id: 1,
            Comentarios: '',
            Jugador: {
              Id: 7,
              Nombre: 'Victor',
              ApellidoPaterno: 'Espiritu',
              ApellidoMaterno: '',
              Edad: 30,
              Numero: 7,
              Suspendido: false,
              Posicion: 'Medio',
              Equipo: {
                Id: 2,
                Nombre: 'Barcelona',
                Capitan: 'Juan Perez'
              }
            }
          },
          {
            Id: 2,
            Comentarios: '',
            Jugador: {
              Id: 8,
              Nombre: 'Alexis',
              ApellidoPaterno: 'Juarez',
              ApellidoMaterno: '',
              Edad: 27,
              Numero: 8,
              Suspendido: false,
              Posicion: 'Medio',
              Equipo: {
                Id: 3,
                Nombre: 'Real Madrid',
                Capitan: 'Rodrigo Mendoza'
              }
            }
          }
        ],
        Jornada: {}
      },
      {
        Id: 3,
        Equipo1Nombre: 'Porto',
        Equipo2Nombre: 'Manchester City',
        Equipo1: {
          Id: 5,
          Nombre: 'Manchester City',
          Capitan: 'Felix Alba',
          TelefonoContacto: '3367658900',
          Comentarios: 'Juego Pendiente',
          GolesFavor: 50,
          GolesContra: 48
        },
        Equipo2: {
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
        Anotadores: [
          {
            Id: 5,
            EquipoGanador: true,
            NumeroDeGoles: 1,
            Comentarios: '',
            Jugador: {
              Id: 21,
              Nombre: 'Javier',
              ApellidoPaterno: 'Sanchez',
              ApellidoMaterno: '',
              Edad: 31,
              Numero: 21,
              Suspendido: false,
              Posicion: 'Defensa',
              Equipo: {
                Id: 5,
                Nombre: 'Manchester City',
                Capitan: 'Felix Alba',
                TelefonoContacto: '3367658900',
                Comentarios: 'Juego Pendiente',
                GolesFavor: 50,
                GolesContra: 48
              }
            }
          },
          {
            Id: 6,
            EquipoGanador: true,
            NumeroDeGoles: 1,
            Comentarios: '',
            Jugador: {
              Id: 20,
              Nombre: 'Alvaro',
              ApellidoPaterno: 'Castillo',
              ApellidoMaterno: '',
              Edad: 31,
              Numero: 20,
              Suspendido: false,
              Posicion: 'Delantero',
              Equipo: {
                Id: 5,
                Nombre: 'Manchester City',
                Capitan: 'Felix Alba',
                TelefonoContacto: '3367658900',
                Comentarios: 'Juego Pendiente',
                GolesFavor: 50,
                GolesContra: 48
              }
            }
          },
          {
            Id: 7,
            EquipoGanador: true,
            NumeroDeGoles: 1,
            Comentarios: '',
            Jugador: {
              Id: 19,
              Nombre: 'Luis',
              ApellidoPaterno: 'Aquino',
              ApellidoMaterno: '',
              Edad: 30,
              Numero: 19,
              Suspendido: false,
              Posicion: 'Portero',
              Equipo: {
                Id: 5,
                Nombre: 'Manchester City',
                Capitan: 'Felix Alba',
                TelefonoContacto: '3367658900',
                Comentarios: 'Juego Pendiente',
                GolesFavor: 50,
                GolesContra: 48
              }
            }
          },
          {
            Id: 8,
            EquipoGanador: true,
            NumeroDeGoles: 1,
            Comentarios: '',
            Jugador: {
              Id: 18,
              Nombre: 'Edgar',
              ApellidoPaterno: 'Garcia',
              ApellidoMaterno: '',
              Edad: 32,
              Numero: 18,
              Suspendido: false,
              Posicion: 'Medio',
              Equipo: {
                Id: 5,
                Nombre: 'Manchester City',
                Capitan: 'Felix Alba',
                TelefonoContacto: '3367658900',
                Comentarios: 'Juego Pendiente',
                GolesFavor: 50,
                GolesContra: 48
              }
            }
          },
          {
            Id: 9,
            EquipoGanador: false,
            NumeroDeGoles: 1,
            Comentarios: '',
            Jugador: {
              Id: 17,
              Nombre: 'Ernesto',
              ApellidoPaterno: 'Alejo',
              ApellidoMaterno: '',
              Edad: 28,
              Numero: 17,
              Suspendido: false,
              Posicion: 'Medio',
              Equipo: {
                Id: 6,
                Nombre: 'Porto',
                Capitan: 'Felix Alba',
                TelefonoContacto: '3367658900',
                Comentarios: 'Adeudos',
                GolesFavor: 20,
                GolesContra: 48
              }
            }
          },
          {
            Id: 10,
            EquipoGanador: false,
            NumeroDeGoles: 1,
            Comentarios: '',
            Jugador: {
              Id: 16,
              Nombre: 'Marcos',
              ApellidoPaterno: 'Gonzalez',
              ApellidoMaterno: '',
              Edad: 39,
              Numero: 16,
              Suspendido: false,
              Posicion: 'Medio',
              Equipo: {
                Id: 6,
                Nombre: 'Porto',
                Capitan: 'Felix Alba',
                TelefonoContacto: '3367658900',
                Comentarios: 'Adeudos',
                GolesFavor: 20,
                GolesContra: 48
              }
            }
          }
        ],
        Expulsados: [
          {
            Id: 2,
            DobleAmarilla: true,
            Jugador: {
              Id: 6,
              Nombre: 'Hugo',
              ApellidoPaterno: 'Gonzalez',
              ApellidoMaterno: '',
              Edad: 29,
              Numero: 6,
              Suspendido: true,
              Posicion: 'Medio'
            }
          },
          {
            Id: 3,
            DobleAmarilla: false,
            Jugador: {
              Id: 7,
              Nombre: 'Victor',
              ApellidoPaterno: 'Espiritu',
              ApellidoMaterno: '',
              Edad: 30,
              Numero: 7,
              Suspendido: false,
              Posicion: 'Medio'
            }
          }
        ],
        Amonestados: [
          {
            Id: 20,
            Jugador: {
              Id: 1,
              Nombre: 'Alan',
              ApellidoPaterno: 'Frias',
              ApellidoMaterno: '',
              Edad: 32,
              Numero: 1,
              Suspendido: false,
              Posicion: 'Portero'
            }
          }
        ],
        Jornada: {
          Id: 3,
          Descripcion: 'Jornada 3',
          FechaInicio: { year: 2019, month: 11, day: 19 },
          FechaFinal: { year: 2019, month: 11, day: 19 },
          Liga: {}
        }
      },
      {
        Id: 4,
        Equipo1Nombre: 'Manchester United',
        Equipo2Nombre: 'PSG',
        Equipo1: {
          Id: 4,
          Nombre: 'Manchester United',
          Capitan: 'Ricardo Gonzalez',
          TelefonoContacto: '3333212567',
          Comentarios: '',
          GolesFavor: 40,
          GolesContra: 28
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 5,
        Equipo1Nombre: 'Tigres',
        Equipo2Nombre: 'Boca Juniors',
        Equipo1: {
          Id: 8,
          Nombre: 'Tigres',
          Capitan: 'Jorge Treviño',
          TelefonoContacto: '3367658900',
          Comentarios: 'Sin Comentarios',
          GolesFavor: 25,
          GolesContra: 25
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 6,
        Equipo1Nombre: 'Barcelona',
        Equipo2Nombre: 'Manchester',
        Equipo1: {
          Id: 2,
          Nombre: 'Barcelona',
          Capitan: 'Juan Perez',
          TelefonoContacto: '3342567890',
          Comentarios: 'No se presento jornada 4',
          GolesFavor: 28,
          GolesContra: 10
        },
        Equipo2: {
          Id: 4,
          Nombre: 'Manchester United',
          Capitan: 'Ricardo Gonzalez',
          TelefonoContacto: '3333212567',
          Comentarios: '',
          GolesFavor: 40,
          GolesContra: 28
        },
        Empate: false,
        GolesEquipo1: 0,
        GolesEquipo2: 2,
        Anotadores: [],
        Expulsados: [],
        Jornada: {}
      },
      {
        Id: 7,
        Equipo1Nombre: 'Bayern Munich',
        Equipo2Nombre: 'Real Madrid',
        Equipo1: {
          Id: 3,
          Nombre: 'Real Madrid',
          Capitan: 'Rodrigo Mendoza',
          TelefonoContacto: '3367896543',
          Comentarios: 'Cuenta con jugador suspendido',
          GolesFavor: 36,
          GolesContra: 18
        },
        Equipo2: {
          Id: 5,
          Nombre: 'Bayern Munich',
          Capitan: 'Marcos Gonzalez',
          TelefonoContacto: '3367658900',
          Comentarios: 'Juego Pendiente',
          GolesFavor: 30,
          GolesContra: 48
        },
        Empate: false,
        GolesEquipo1: 1,
        GolesEquipo2: 2,
        Anotadores: [],
        Expulsados: [],
        Jornada: {}
      },
      {
        Id: 8,
        Equipo1Nombre: 'Manchester City',
        Equipo2Nombre: 'PSG',
        Equipo1: {
          Id: 5,
          Nombre: 'Manchester City',
          Capitan: 'Felix Alba',
          TelefonoContacto: '3367658900',
          Comentarios: 'Juego Pendiente',
          GolesFavor: 50,
          GolesContra: 48
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 9,
        Equipo1Nombre: 'Porto',
        Equipo2Nombre: 'Tigres',
        Equipo1: {
          Id: 6,
          Nombre: 'Porto',
          Capitan: 'Felix Alba',
          TelefonoContacto: '3367658900',
          Comentarios: 'Adeudos',
          GolesFavor: 20,
          GolesContra: 48
        },
        Equipo2: {
          Id: 8,
          Nombre: 'Tigres',
          Capitan: 'Jorge Treviño',
          TelefonoContacto: '3367658900',
          Comentarios: 'Sin Comentarios',
          GolesFavor: 25,
          GolesContra: 25
        },
        Empate: false,
        GolesEquipo1: 2,
        GolesEquipo2: 4,
        Anotadores: [],
        Expulsados: [],
        Jornada: {}
      },
      {
        Id: 10,
        Equipo1Nombre: 'Juventus',
        Equipo2Nombre: 'Boca Juniors',
        Equipo1: {
          Id: 1,
          Nombre: 'Juventus',
          Capitan: 'Luis Miramontes',
          TelefonoContacto: '3345367890',
          Comentarios: 'Sin Adeudos',
          GolesFavor: 30,
          GolesContra: 8
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 11,
        Equipo1Nombre: 'Juventus',
        Equipo2Nombre: 'Boca Juniors',
        Equipo1: {
          Id: 1,
          Nombre: 'Juventus',
          Capitan: 'Luis Miramontes',
          TelefonoContacto: '3345367890',
          Comentarios: 'Sin Adeudos',
          GolesFavor: 30,
          GolesContra: 8
        },
        Equipo2: {
          Id: 9,
          Nombre: 'Boca Juniors',
          Capitan: 'Oscar Sanchez',
          TelefonoContacto: '3367658900',
          Comentarios: 'Documentos pendientes',
          GolesFavor: 25,
          GolesContra: 25
        },
        Empate: false,
        GolesEquipo1: 6,
        GolesEquipo2: 0,
        Anotadores: [],
        Expulsados: [],
        Jornada: {}
      },
      {
        Id: 12,
        Equipo1Nombre: 'Tigres',
        Equipo2Nombre: 'Manchester United',
        Equipo1: {
          Id: 8,
          Nombre: 'Tigres',
          Capitan: 'Jorge Treviño',
          TelefonoContacto: '3367658900',
          Comentarios: 'Sin Comentarios',
          GolesFavor: 25,
          GolesContra: 25
        },
        Equipo2: {
          Id: 4,
          Nombre: 'Manchester United',
          Capitan: 'Ricardo Gonzalez',
          TelefonoContacto: '3333212567',
          Comentarios: '',
          GolesFavor: 40,
          GolesContra: 28
        },
        Empate: false,
        GolesEquipo1: 3,
        GolesEquipo2: 1,
        Anotadores: [],
        Expulsados: [],
        Jornada: {}
      },
      {
        Id: 13,
        Equipo1Nombre: 'Barcelona',
        Equipo2Nombre: 'PSG',
        Equipo1: {
          Id: 7,
          Nombre: 'PSG',
          Capitan: 'Alexis Juarez',
          TelefonoContacto: '3367658900',
          Comentarios: '',
          GolesFavor: 25,
          GolesContra: 25
        },
        Equipo2: {
          Id: 2,
          Nombre: 'Barcelona',
          Capitan: 'Juan Perez',
          TelefonoContacto: '3342567890',
          Comentarios: 'No se presento jornada 4',
          GolesFavor: 28,
          GolesContra: 10
        },
        Empate: false,
        GolesEquipo1: 2,
        GolesEquipo2: 4,
        Anotadores: [],
        Expulsados: [],
        Jornada: {}
      },
      {
        Id: 14,
        Equipo1Nombre: 'Manchester United',
        Equipo2Nombre: 'Real Madrid',
        Equipo1: {
          Id: 3,
          Nombre: 'Real Madrid',
          Capitan: 'Rodrigo Mendoza',
          TelefonoContacto: '3367896543',
          Comentarios: 'Cuenta con jugador suspendido',
          GolesFavor: 36,
          GolesContra: 18
        },
        Equipo2: {
          Id: 4,
          Nombre: 'Manchester United',
          Capitan: 'Ricardo Gonzalez',
          TelefonoContacto: '3333212567',
          Comentarios: '',
          GolesFavor: 40,
          GolesContra: 28
        },
        Empate: true,
        GolesEquipo1: 1,
        GolesEquipo2: 3,
        Anotadores: [],
        Expulsados: [],
        Jornada: {}
      },
      {
        Id: 15,
        Equipo1Nombre: 'Tigres',
        Equipo2Nombre: 'Porto',
        Equipo1: {
          Id: 8,
          Nombre: 'Tigres',
          Capitan: 'Jorge Treviño',
          TelefonoContacto: '3367658900',
          Comentarios: 'Sin Comentarios',
          GolesFavor: 25,
          GolesContra: 25
        },
        Equipo2: {
          Id: 6,
          Nombre: 'Porto',
          Capitan: 'Felix Alba',
          TelefonoContacto: '3367658900',
          Comentarios: 'Adeudos',
          GolesFavor: 20,
          GolesContra: 48
        },
        Empate: true,
        GolesEquipo1: 0,
        GolesEquipo2: 0,
        Anotadores: [],
        Expulsados: [],
        Jornada: {}
      },
      {
        Id: 16,
        Equipo1Nombre: 'Juventus',
        Equipo2Nombre: 'Manchester',
        Equipo1: {
          Id: 1,
          Nombre: 'Juventus',
          Capitan: 'Luis Miramontes',
          TelefonoContacto: '3345367890',
          Comentarios: 'Sin Adeudos',
          GolesFavor: 30,
          GolesContra: 8
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 17,
        Equipo1Nombre: 'Barcelona',
        Equipo2Nombre: 'Real Madrid',
        Equipo1: {
          Id: 2,
          Nombre: 'Barcelona',
          Capitan: 'Juan Perez',
          TelefonoContacto: '3342567890',
          Comentarios: 'No se presento jornada 4',
          GolesFavor: 28,
          GolesContra: 10
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 18,
        Equipo1Nombre: 'Porto',
        Equipo2Nombre: 'Manchester City',
        Equipo1: {
          Id: 5,
          Nombre: 'Manchester City',
          Capitan: 'Felix Alba',
          TelefonoContacto: '3367658900',
          Comentarios: 'Juego Pendiente',
          GolesFavor: 50,
          GolesContra: 48
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 19,
        Equipo1Nombre: 'Manchester United',
        Equipo2Nombre: 'PSG',
        Equipo1: {
          Id: 4,
          Nombre: 'Manchester United',
          Capitan: 'Ricardo Gonzalez',
          TelefonoContacto: '3333212567',
          Comentarios: '',
          GolesFavor: 40,
          GolesContra: 28
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 20,
        Equipo1Nombre: 'Tigres',
        Equipo2Nombre: 'Boca Juniors',
        Equipo1: {
          Id: 8,
          Nombre: 'Tigres',
          Capitan: 'Jorge Treviño',
          TelefonoContacto: '3367658900',
          Comentarios: 'Sin Comentarios',
          GolesFavor: 25,
          GolesContra: 25
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 21,
        Equipo1Nombre: 'Juventus',
        Equipo2Nombre: 'Manchester',
        Equipo1: {
          Id: 1,
          Nombre: 'Juventus',
          Capitan: 'Luis Miramontes',
          TelefonoContacto: '3345367890',
          Comentarios: 'Sin Adeudos',
          GolesFavor: 30,
          GolesContra: 8
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 22,
        Equipo1Nombre: 'Barcelona',
        Equipo2Nombre: 'Real Madrid',
        Equipo1: {
          Id: 2,
          Nombre: 'Barcelona',
          Capitan: 'Juan Perez',
          TelefonoContacto: '3342567890',
          Comentarios: 'No se presento jornada 4',
          GolesFavor: 28,
          GolesContra: 10
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 23,
        Equipo1Nombre: 'Porto',
        Equipo2Nombre: 'Manchester City',
        Equipo1: {
          Id: 5,
          Nombre: 'Manchester City',
          Capitan: 'Felix Alba',
          TelefonoContacto: '3367658900',
          Comentarios: 'Juego Pendiente',
          GolesFavor: 50,
          GolesContra: 48
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 24,
        Equipo1Nombre: 'Manchester United',
        Equipo2Nombre: 'PSG',
        Equipo1: {
          Id: 4,
          Nombre: 'Manchester United',
          Capitan: 'Ricardo Gonzalez',
          TelefonoContacto: '3333212567',
          Comentarios: '',
          GolesFavor: 40,
          GolesContra: 28
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 25,
        Equipo1Nombre: 'Tigres',
        Equipo2Nombre: 'Boca Juniors',
        Equipo1: {
          Id: 8,
          Nombre: 'Tigres',
          Capitan: 'Jorge Treviño',
          TelefonoContacto: '3367658900',
          Comentarios: 'Sin Comentarios',
          GolesFavor: 25,
          GolesContra: 25
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 26,
        Equipo1Nombre: 'Juventus',
        Equipo2Nombre: 'Manchester',
        Equipo1: {
          Id: 1,
          Nombre: 'Juventus',
          Capitan: 'Luis Miramontes',
          TelefonoContacto: '3345367890',
          Comentarios: 'Sin Adeudos',
          GolesFavor: 30,
          GolesContra: 8
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 27,
        Equipo1Nombre: 'Barcelona',
        Equipo2Nombre: 'Real Madrid',
        Equipo1: {
          Id: 2,
          Nombre: 'Barcelona',
          Capitan: 'Juan Perez',
          TelefonoContacto: '3342567890',
          Comentarios: 'No se presento jornada 4',
          GolesFavor: 28,
          GolesContra: 10
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 28,
        Equipo1Nombre: 'Porto',
        Equipo2Nombre: 'Manchester City',
        Equipo1: {
          Id: 5,
          Nombre: 'Manchester City',
          Capitan: 'Felix Alba',
          TelefonoContacto: '3367658900',
          Comentarios: 'Juego Pendiente',
          GolesFavor: 50,
          GolesContra: 48
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 29,
        Equipo1Nombre: 'Manchester United',
        Equipo2Nombre: 'PSG',
        Equipo1: {
          Id: 4,
          Nombre: 'Manchester United',
          Capitan: 'Ricardo Gonzalez',
          TelefonoContacto: '3333212567',
          Comentarios: '',
          GolesFavor: 40,
          GolesContra: 28
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 30,
        Equipo1Nombre: 'Tigres',
        Equipo2Nombre: 'Boca Juniors',
        Equipo1: {
          Id: 8,
          Nombre: 'Tigres',
          Capitan: 'Jorge Treviño',
          TelefonoContacto: '3367658900',
          Comentarios: 'Sin Comentarios',
          GolesFavor: 25,
          GolesContra: 25
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 31,
        Equipo1Nombre: 'Juventus',
        Equipo2Nombre: 'Manchester',
        Equipo1: {
          Id: 1,
          Nombre: 'Juventus',
          Capitan: 'Luis Miramontes',
          TelefonoContacto: '3345367890',
          Comentarios: 'Sin Adeudos',
          GolesFavor: 30,
          GolesContra: 8
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 32,
        Equipo1Nombre: 'Barcelona',
        Equipo2Nombre: 'Real Madrid',
        Equipo1: {
          Id: 2,
          Nombre: 'Barcelona',
          Capitan: 'Juan Perez',
          TelefonoContacto: '3342567890',
          Comentarios: 'No se presento jornada 4',
          GolesFavor: 28,
          GolesContra: 10
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 33,
        Equipo1Nombre: 'Porto',
        Equipo2Nombre: 'Manchester City',
        Equipo1: {
          Id: 5,
          Nombre: 'Manchester City',
          Capitan: 'Felix Alba',
          TelefonoContacto: '3367658900',
          Comentarios: 'Juego Pendiente',
          GolesFavor: 50,
          GolesContra: 48
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 34,
        Equipo1Nombre: 'Manchester United',
        Equipo2Nombre: 'PSG',
        Equipo1: {
          Id: 4,
          Nombre: 'Manchester United',
          Capitan: 'Ricardo Gonzalez',
          TelefonoContacto: '3333212567',
          Comentarios: '',
          GolesFavor: 40,
          GolesContra: 28
        },
        Equipo2: {
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
        Jornada: {}
      },
      {
        Id: 35,
        Equipo1Nombre: 'Tigres',
        Equipo2Nombre: 'Boca Juniors',
        Equipo1: {
          Id: 8,
          Nombre: 'Tigres',
          Capitan: 'Jorge Treviño',
          TelefonoContacto: '3367658900',
          Comentarios: 'Sin Comentarios',
          GolesFavor: 25,
          GolesContra: 25
        },
        Equipo2: {
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
        Jornada: {}
      }
    ];

    this.partidoId = +this.route.snapshot.paramMap.get('id');

    if (this.partidoId !== 0) {
      this.getPartidoInfoById(this.partidoId);
    }
  }
  getPartidoInfoById(id: number) {
    this.partido = this.partidos.find(x => x.Id === id);
    this.anotadoresEquipo1 = this.partido.Anotadores.filter(
      x => x.Jugador.Equipo.Nombre === this.partido.Equipo1.Nombre
    );
    this.anotadoresEquipo2 = this.partido.Anotadores.filter(
      x => x.Jugador.Equipo.Nombre === this.partido.Equipo2.Nombre
    );
  }
}
