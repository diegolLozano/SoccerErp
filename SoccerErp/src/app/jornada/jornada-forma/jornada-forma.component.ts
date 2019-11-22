import { Component, OnInit } from '@angular/core';
import { Jornada } from 'src/app/models/jornada';
import { ActivatedRoute } from '@angular/router';
import { Liga } from 'src/app/models/liga';

@Component({
  selector: 'app-jornada-forma',
  templateUrl: './jornada-forma.component.html',
  styleUrls: ['./jornada-forma.component.scss']
})
export class JornadaFormaComponent implements OnInit {
  jornadaId: number;
  jornada: Jornada;
  jornadas: Jornada[];
  ligas: Liga[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.jornada = {
      Liga: {
        Id: ''
      }
    };

    this.jornadaId = +this.route.snapshot.paramMap.get('id');
    this.jornadas = [
      {
        Id: 1,
        Descripcion: 'Jornada 1',
        FechaInicio: {year: 2019, month: 11, day: 19},
        FechaFinal: {year: 2019, month: 11, day: 19},
        Partidos: [
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
          },
          {
            Id: 2,
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
            Jornada : {}
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
            Jornada : {}
          },
          {
            Id: 4,
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
            Jornada : {}
          }
        ],
        Liga: {
          Id: 1,
          Nombre: 'Sabatina',
          Costo: '500',
          DiasDeSemana: 'Sabado',
          Ubicacion: {
            Id: 1,
            Nombre: 'SoccerLifeBajio',
            Calle: '',
            Numero: ''
          }
        }
      },
      {
        Id: 2,
        Descripcion: 'Jornada 2',
        FechaInicio: {year: 2019, month: 11, day: 19},
        FechaFinal: {year: 2019, month: 11, day: 19},
        Partidos: [
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
            Jornada : {}
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
            Jornada : {}
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
            Jornada : {}
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
            Jornada : {}
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
            Jornada : {}
          }
        ],
        Liga: {
          Id: 1,
          Nombre: 'Sabatina',
          Costo: '500',
          DiasDeSemana: 'Sabado',
          Ubicacion: {
            Id: 1,
            Nombre: 'SoccerLifeBajio',
            Calle: '',
            Numero: ''
          }
        }
      },
      {
        Id: 3,
        Descripcion: 'Jornada 3',
        FechaInicio: {year: 2019, month: 11, day: 19},
        FechaFinal: {year: 2019, month: 11, day: 19},
        Partidos: [
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
            Empate: false,
            GolesEquipo1: 6,
            GolesEquipo2: 0,
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
          },
          {
            Id: 11,
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
            Jornada : {}
          },
          {
            Id: 12,
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
            Jornada : {}
          },
          {
            Id: 13,
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
            Jornada : {}
          },
          {
            Id: 14,
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
            Jornada : {}
          }
        ],
        Liga: {
          Id: 2,
          Nombre: 'Maculina Semanal',
          Costo: '450',
          DiasDeSemana: 'Lunes, Martes, Miercoles',
          Ubicacion: {
            Id: 1,
            Nombre: 'SoccerLifeBajio',
            Calle: '',
            Numero: ''
          }
        }
      },
      {
        Id: 4,
        Descripcion: 'Jornada 4',
        FechaInicio: {year: 2019, month: 11, day: 19},
        FechaFinal: {year: 2019, month: 11, day: 19},
        Partidos: [
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
          },
          {
            Id: 2,
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
            Jornada : {}
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
            Jornada : {}
          },
          {
            Id: 4,
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
            Jornada : {}
          }
        ],
        Liga: {
          Id: 3,
          Nombre: 'Femenina Semanal',
          Costo: '450',
          DiasDeSemana: 'Sabado',
          Ubicacion: {
            Id: 1,
            Nombre: 'SoccerLifeBajio',
            Calle: '',
            Numero: ''
          }
        }
      },
      {
        Id: 5,
        Descripcion: 'Jornada 5',
        FechaInicio: {year: 2019, month: 11, day: 19},
        FechaFinal: {year: 2019, month: 11, day: 19},
        Partidos: [
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
          },
          {
            Id: 2,
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
            Jornada : {}
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
            Jornada : {}
          },
          {
            Id: 4,
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
            Jornada : {}
          }
        ],
        Liga: {
          Id: 4,
          Nombre: 'Femenina Fin de Semana',
          Costo: '400',
          DiasDeSemana: 'Sabado, Domingo',
          Ubicacion: {
            Id: 1,
            Nombre: 'SoccerLifeBajio',
            Calle: '',
            Numero: ''
          }
        }
      },
      {
        Id: 6,
        Descripcion: 'Jornada 6',
        FechaInicio: {year: 2019, month: 11, day: 19},
        FechaFinal: {year: 2019, month: 11, day: 19},
        Partidos: [
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
          },
          {
            Id: 2,
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
            Jornada : {}
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
            Jornada : {}
          },
          {
            Id: 4,
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
            Jornada : {}
          }
        ],
        Liga: {
          Id: 5,
          Nombre: 'Masculina Semanal 2',
          Costo: '600',
          DiasDeSemana: 'Jueves, Viernes',
          Ubicacion: {
            Id: 1,
            Nombre: 'SoccerLifeBajio',
            Calle: '',
            Numero: ''
          }
        }
      },
      {
        Id: 7,
        Descripcion: 'Jornada 7',
        FechaInicio: {year: 2019, month: 11, day: 19},
        FechaFinal: {year: 2019, month: 11, day: 19},
        Partidos: [
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
          },
          {
            Id: 2,
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
            Jornada : {}
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
            Jornada : {}
          },
          {
            Id: 4,
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
            Jornada : {}
          }
        ],
        Liga: {
          Id: 2,
          Nombre: 'Maculina Semanal',
          Costo: '450',
          DiasDeSemana: 'Lunes, Martes, Miercoles',
          Ubicacion: {
            Id: 1,
            Nombre: 'SoccerLifeBajio',
            Calle: '',
            Numero: ''
          }
        }
      },
      {
        Id: 8,
        Descripcion: 'Jornada 8',
        FechaInicio: {year: 2019, month: 11, day: 19},
        FechaFinal: {year: 2019, month: 11, day: 19},
        Partidos: [
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
          },
          {
            Id: 2,
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
            Jornada : {}
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
            Jornada : {}
          },
          {
            Id: 4,
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
            Jornada : {}
          }
        ],
        Liga: {
          Id: 3,
          Nombre: 'Femenina Semanal',
          Costo: '450',
          DiasDeSemana: 'Sabado',
          Ubicacion: {
            Id: 1,
            Nombre: 'SoccerLifeBajio',
            Calle: '',
            Numero: ''
          }
        }
      },
      {
        Id: 9,
        Descripcion: 'Jornada 9',
        FechaInicio: {year: 2019, month: 11, day: 19},
        FechaFinal: {year: 2019, month: 11, day: 19},
        Partidos: [
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
          },
          {
            Id: 2,
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
            Jornada : {}
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
            Jornada : {}
          },
          {
            Id: 4,
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
            Jornada : {}
          }
        ],
        Liga: {
          Id: 4,
          Nombre: 'Femenina Fin de Semana',
          Costo: '400',
          DiasDeSemana: 'Sabado, Domingo',
          Ubicacion: {
            Id: 1,
            Nombre: 'SoccerLifeBajio',
            Calle: '',
            Numero: ''
          }
        }
      },
      {
        Id: 10,
        Descripcion: 'Jornada 10',
        FechaInicio: {year: 2019, month: 11, day: 19},
        FechaFinal: {year: 2019, month: 11, day: 19},
        Partidos: [
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
          },
          {
            Id: 2,
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
            Jornada : {}
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
            Jornada : {}
          },
          {
            Id: 4,
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
            Jornada : {}
          }
        ],
        Liga: {
          Id: 5,
          Nombre: 'Masculina Semanal 2',
          Costo: '600',
          DiasDeSemana: 'Jueves, Viernes',
          Ubicacion: {
            Id: 1,
            Nombre: 'SoccerLifeBajio',
            Calle: '',
            Numero: ''
          }
        }
      },
      {
        Id: 11,
        Descripcion: 'Jornada 11',
        FechaInicio: {year: 2019, month: 11, day: 19},
        FechaFinal: {year: 2019, month: 11, day: 19},
        Partidos: [
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
          },
          {
            Id: 2,
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
            Jornada : {}
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
            Jornada : {}
          },
          {
            Id: 4,
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
            Jornada : {}
          }
        ],
        Liga: {
          Id: 1,
          Nombre: 'Sabatina',
          Costo: '500',
          DiasDeSemana: 'Sabado',
          Ubicacion: {
            Id: 1,
            Nombre: 'SoccerLifeBajio',
            Calle: '',
            Numero: ''
          }
        }
      },
      {
        Id: 12,
        Descripcion: 'Jornada 12',
        FechaInicio: {year: 2019, month: 11, day: 19},
        FechaFinal: {year: 2019, month: 11, day: 19},
        Partidos: [
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
          },
          {
            Id: 2,
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
            Jornada : {}
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
            Jornada : {}
          },
          {
            Id: 4,
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
            Jornada : {}
          }
        ],
        Liga: {
          Id: 2,
          Nombre: 'Maculina Semanal',
          Costo: '450',
          DiasDeSemana: 'Lunes, Martes, Miercoles',
          Ubicacion: {
            Id: 1,
            Nombre: 'SoccerLifeBajio',
            Calle: '',
            Numero: ''
          }
        }
      },
      {
        Id: 13,
        Descripcion: 'Jornada 13',
        FechaInicio: {year: 2019, month: 11, day: 19},
        FechaFinal: {year: 2019, month: 11, day: 19},
        Partidos: [
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
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
            Anotadores: [],
            Expulsados: [],
            Jornada : {}
          },
          {
            Id: 2,
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
            Jornada : {}
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
            Jornada : {}
          },
          {
            Id: 4,
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
            Jornada : {}
          }
        ],
        Liga: {
          Id: 3,
          Nombre: 'Femenina Semanal',
          Costo: '450',
          DiasDeSemana: 'Sabado',
          Ubicacion: {
            Id: 1,
            Nombre: 'SoccerLifeBajio',
            Calle: '',
            Numero: ''
          }
        }
      }
    ];
    this.ligas = [
      {
        Id: 1,
        Nombre: 'Sabatina',
        Costo: '500',
        DiasDeSemana: 'Sabado',
        Ubicacion: {
          Id: 1,
          Nombre: 'SoccerLifeBajio',
          Calle: '',
          Numero: ''
        }
      },
      {
        Id: 2,
        Nombre: 'Maculina Semanal',
        Costo: '450',
        DiasDeSemana: 'Lunes, Martes, Miercoles',
        Ubicacion: {
          Id: 1,
          Nombre: 'SoccerLifeBajio',
          Calle: '',
          Numero: ''
        }
      },
      {
        Id: 3,
        Nombre: 'Femenina Semanal',
        Costo: '450',
        DiasDeSemana: 'Sabado',
        Ubicacion: {
          Id: 1,
          Nombre: 'SoccerLifeBajio',
          Calle: '',
          Numero: ''
        }
      },
      {
        Id: 4,
        Nombre: 'Femenina Fin de Semana',
        Costo: '400',
        DiasDeSemana: 'Sabado, Domingo',
        Ubicacion: {
          Id: 1,
          Nombre: 'SoccerLifeBajio',
          Calle: '',
          Numero: ''
        }
      },
      {
        Id: 5,
        Nombre: 'Masculina Semanal 2',
        Costo: '600',
        DiasDeSemana: 'Jueves, Viernes',
        Ubicacion: {
          Id: 1,
          Nombre: 'SoccerLifeBajio',
          Calle: '',
          Numero: ''
        }
      }
    ];
    if (this.jornadaId !== 0) {
      this.getJornadaById(this.jornadaId);
    }
  }
  getJornadaById(jornadaId: number) {
    this.jornada = this.jornadas.find(x => x.Id === jornadaId);
  }
}
