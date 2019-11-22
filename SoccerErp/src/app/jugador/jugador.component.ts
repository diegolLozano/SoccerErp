import { Component, OnInit } from '@angular/core';
import { Jugador } from '../models/jugador';
import { ActivatedRoute } from '@angular/router';
import { Liga } from '../models/liga';
import { Equipo } from '../models/equipo';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.scss']
})
export class JugadorComponent implements OnInit {
  jugadores: Jugador[];
  equipoId: number;
  title: string;
  jugadoresByEquipo: Jugador[];
  ligas: Liga[];
  equipos: Equipo[];
  equiposByLiga: Equipo[];
  nombreLiga = 'Ligas';
  nombreEquipo = 'Equipos';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.jugadores = [
      {
        Id: 1,
        Nombre: 'Alan',
        ApellidoPaterno: 'Frias',
        ApellidoMaterno: '',
        Edad: 32,
        Numero: 1,
        Suspendido: false,
        Posicion: 'Portero',
        Equipo: {
          Id: 1,
          Nombre: 'Juventus',
          Capitan: 'Luis Miramontes'
        }
      },
      {
        Id: 2,
        Nombre: 'Abraham',
        ApellidoPaterno: 'Contreras',
        ApellidoMaterno: '',
        Edad: 32,
        Numero: 2,
        Suspendido: false,
        Posicion: 'Defensa',
        Equipo: {
          Id: 3,
          Nombre: 'Real Madrid',
          Capitan: 'Rodrigo Mendoza'
        }
      },
      {
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
      },
      {
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
      },
      {
        Id: 5,
        Nombre: 'Adolfo',
        ApellidoPaterno: 'Peña',
        ApellidoMaterno: '',
        Edad: 36,
        Numero: 5,
        Suspendido: false,
        Posicion: 'Defensa',
        Equipo: {
          Id: 3,
          Nombre: 'Real Madrid',
          Capitan: 'Rodrigo Mendoza'
        }
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
        Id: 9,
        Nombre: 'Jesus',
        ApellidoPaterno: 'Vazquez',
        ApellidoMaterno: '',
        Edad: 32,
        Numero: 9,
        Suspendido: false,
        Posicion: 'Medio',
        Equipo: {
          Id: 1,
          Nombre: 'Juventus',
          Capitan: 'Luis Miramontes'
        }
      },
      {
        Id: 10,
        Nombre: 'Omar',
        ApellidoPaterno: 'Ledezma',
        ApellidoMaterno: '',
        Edad: 27,
        Numero: 10,
        Suspendido: false,
        Posicion: 'Medio',
        Equipo: {
          Id: 2,
          Nombre: 'Barcelona',
          Capitan: 'Juan Perez'
        }
      },
      {
        Id: 11,
        Nombre: 'Omar',
        ApellidoPaterno: 'Soltero',
        ApellidoMaterno: '',
        Edad: 32,
        Numero: 11,
        Suspendido: false,
        Posicion: 'Delantero',
        Equipo: {
          Id: 3,
          Nombre: 'Real Madrid',
          Capitan: 'Rodrigo Mendoza'
        }
      },
      {
        Id: 12,
        Nombre: 'Jorge',
        ApellidoPaterno: 'Treviño',
        ApellidoMaterno: '',
        Edad: 33,
        Numero: 12,
        Suspendido: false,
        Posicion: 'Medio',
        Equipo: {
          Id: 1,
          Nombre: 'Juventus',
          Capitan: 'Luis Miramontes'
        }
      },
      {
        Id: 13,
        Nombre: 'Trino',
        ApellidoPaterno: 'Fajardo',
        ApellidoMaterno: '',
        Edad: 32,
        Numero: 13,
        Suspendido: false,
        Posicion: 'Defensa',
        Equipo: {
          Id: 2,
          Nombre: 'Barcelona',
          Capitan: 'Juan Perez'
        }
      },
      {
        Id: 14,
        Nombre: 'Adrian',
        ApellidoPaterno: 'Treviño',
        ApellidoMaterno: '',
        Edad: 30,
        Numero: 1,
        Suspendido: false,
        Posicion: 'Defensa',
        Equipo: {
          Id: 3,
          Nombre: 'Real Madrid',
          Capitan: 'Rodrigo Mendoza'
        }
      },
      {
        Id: 15,
        Nombre: 'Diego',
        ApellidoPaterno: 'Lozano',
        ApellidoMaterno: '',
        Edad: 32,
        Numero: 15,
        Suspendido: false,
        Posicion: 'Delantero',
        Equipo: {
          Id: 1,
          Nombre: 'Juventus',
          Capitan: 'Luis Miramontes'
        }
      },
      {
        Id: 16,
        Nombre: 'Marcos',
        ApellidoPaterno: 'Gonzalez',
        ApellidoMaterno: '',
        Edad: 39,
        Numero: 16,
        Suspendido: false,
        Posicion: 'Medio',
        Equipo: {
          Id: 2,
          Nombre: 'Barcelona',
          Capitan: 'Juan Perez'
        }
      },
      {
        Id: 17,
        Nombre: 'Ernesto',
        ApellidoPaterno: 'Alejo',
        ApellidoMaterno: '',
        Edad: 28,
        Numero: 17,
        Suspendido: false,
        Posicion: 'Medio',
        Equipo: {
          Id: 3,
          Nombre: 'Real Madrid',
          Capitan: 'Rodrigo Mendoza'
        }
      },
      {
        Id: 18,
        Nombre: 'Edgar',
        ApellidoPaterno: 'Garcia',
        ApellidoMaterno: '',
        Edad: 32,
        Numero: 18,
        Suspendido: false,
        Posicion: 'Medio',
        Equipo: {
          Id: 1,
          Nombre: 'Juventus',
          Capitan: 'Luis Miramontes'
        }
      },
      {
        Id: 19,
        Nombre: 'Luis',
        ApellidoPaterno: 'Aquino',
        ApellidoMaterno: '',
        Edad: 30,
        Numero: 19,
        Suspendido: false,
        Posicion: 'Portero',
        Equipo: {
          Id: 2,
          Nombre: 'Barcelona',
          Capitan: 'Juan Perez'
        }
      },
      {
        Id: 20,
        Nombre: 'Alvaro',
        ApellidoPaterno: 'Castillo',
        ApellidoMaterno: '',
        Edad: 31,
        Numero: 20,
        Suspendido: false,
        Posicion: 'Delantero',
        Equipo: {
          Id: 3,
          Nombre: 'Real Madrid',
          Capitan: 'Rodrigo Mendoza'
        }
      },
      {
        Id: 21,
        Nombre: 'Javier',
        ApellidoPaterno: 'Sanchez',
        ApellidoMaterno: '',
        Edad: 31,
        Numero: 21,
        Suspendido: false,
        Posicion: 'Defensa',
        Equipo: {
          Id: 1,
          Nombre: 'Juventus',
          Capitan: 'Luis Miramontes'
        }
      },
      {
        Id: 22,
        Nombre: 'Hugo',
        ApellidoPaterno: 'Gonzalez',
        ApellidoMaterno: '',
        Edad: 37,
        Numero: 22,
        Suspendido: false,
        Posicion: 'Portero',
        Equipo: {
          Id: 2,
          Nombre: 'Barcelona',
          Capitan: 'Juan Perez'
        }
      },
      {
        Id: 23,
        Nombre: 'Jorge',
        ApellidoPaterno: 'Gutierrez',
        ApellidoMaterno: '',
        Edad: 30,
        Numero: 23,
        Suspendido: false,
        Posicion: 'Defensa',
        Equipo: {
          Id: 3,
          Nombre: 'Real Madrid',
          Capitan: 'Rodrigo Mendoza'
        }
      },
      {
        Id: 24,
        Nombre: 'Ricardo',
        ApellidoPaterno: 'Garcia',
        ApellidoMaterno: '',
        Edad: 31,
        Numero: 24,
        Suspendido: false,
        Posicion: 'Medio',
        Equipo: {
          Id: 2,
          Nombre: 'Barcelona',
          Capitan: 'Juan Perez'
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
    this.equipos = [
      {
        Id: 1,
        Nombre: 'Juventus',
        Capitan: 'Luis Miramontes',
        TelefonoContacto: '3345367890',
        Comentarios: 'Sin Adeudos',
        GolesFavor: 30,
        GolesContra: 8,
        Liga: {
          Id: 1,
          Nombre: 'Sabatina',
          Costo: '500',
          DiasDeSemana: 'Sabado'
        }
      },
      {
        Id: 2,
        Nombre: 'Barcelona',
        Capitan: 'Juan Perez',
        TelefonoContacto: '3342567890',
        Comentarios: 'No se presento jornada 4',
        GolesFavor: 28,
        GolesContra: 10,
        Liga: {
          Id: 1,
          Nombre: 'Sabatina',
          Costo: '500',
          DiasDeSemana: 'Sabado'
        }
      },
      {
        Id: 3,
        Nombre: 'Real Madrid',
        Capitan: 'Rodrigo Mendoza',
        TelefonoContacto: '3367896543',
        Comentarios: 'Cuenta con jugador suspendido',
        GolesFavor: 36,
        GolesContra: 18,
        Liga: {
          Id: 2,
          Nombre: 'Maculina Semanal',
          Costo: '450',
          DiasDeSemana: 'Lunes, Martes, Miercoles'
        }
      },
      {
        Id: 4,
        Nombre: 'Manchester United',
        Capitan: 'Ricardo Gonzalez',
        TelefonoContacto: '3333212567',
        Comentarios: '',
        GolesFavor: 40,
        GolesContra: 28,
        Liga: {
          Id: 2,
          Nombre: 'Maculina Semanal',
          Costo: '450',
          DiasDeSemana: 'Lunes, Martes, Miercoles'
        }
      },
      {
        Id: 5,
        Nombre: 'Bayern Munich',
        Capitan: 'Marcos Gonzalez',
        TelefonoContacto: '3367658900',
        Comentarios: 'Juego Pendiente',
        GolesFavor: 30,
        GolesContra: 48,
        Liga: {
          Id: 3,
          Nombre: 'Femenina Semanal',
          Costo: '450',
          DiasDeSemana: 'Sabado'
        }
      },
      {
        Id: 5,
        Nombre: 'Manchester City',
        Capitan: 'Felix Alba',
        TelefonoContacto: '3367658900',
        Comentarios: 'Juego Pendiente',
        GolesFavor: 50,
        GolesContra: 48,
        Liga: {
          Id: 3,
          Nombre: 'Femenina Semanal',
          Costo: '450',
          DiasDeSemana: 'Sabado'
        }
      },
      {
        Id: 6,
        Nombre: 'Porto',
        Capitan: 'Felix Alba',
        TelefonoContacto: '3367658900',
        Comentarios: 'Adeudos',
        GolesFavor: 20,
        GolesContra: 48,
        Liga: {
          Id: 4,
          Nombre: 'Femenina Fin de Semana',
          Costo: '400',
          DiasDeSemana: 'Sabado, Domingo'
        }
      },
      {
        Id: 7,
        Nombre: 'PSG',
        Capitan: 'Alexis Juarez',
        TelefonoContacto: '3367658900',
        Comentarios: '',
        GolesFavor: 25,
        GolesContra: 25,
        Liga: {
          Id: 4,
          Nombre: 'Femenina Fin de Semana',
          Costo: '400',
          DiasDeSemana: 'Sabado, Domingo'
        }
      },
      {
        Id: 8,
        Nombre: 'Tigres',
        Capitan: 'Jorge Treviño',
        TelefonoContacto: '3367658900',
        Comentarios: 'Sin Comentarios',
        GolesFavor: 25,
        GolesContra: 25,
        Liga: {
          Id: 1,
          Nombre: 'Sabatina',
          Costo: '500',
          DiasDeSemana: 'Sabado'
        }
      },
      {
        Id: 9,
        Nombre: 'Boca Juniors',
        Capitan: 'Oscar Sanchez',
        TelefonoContacto: '3367658900',
        Comentarios: 'Documentos pendientes',
        GolesFavor: 25,
        GolesContra: 25,
        Liga: {
          Id: 2,
          Nombre: 'Maculina Semanal',
          Costo: '450',
          DiasDeSemana: 'Lunes, Martes, Miercoles'
        }
      }
    ];

    this.equipoId = +this.route.snapshot.paramMap.get('id');
    this.title = 'Jugadores';
    if (this.equipoId !== 0) {
      this.getJugadoresByEquipo(this.equipoId);
      this.nombreEquipo = 'Equipos';
      if (
        this.jugadoresByEquipo.length > 0 &&
        this.jugadoresByEquipo[0].Equipo != null
      ) {
        this.title = this.jugadoresByEquipo[0].Equipo.Nombre;
      }
    }
  }
  getJugadoresByEquipo(id: number) {
    this.nombreEquipo = this.equipos.find(x => x.Id === id).Nombre;
    this.title = this.equipos.find(x => x.Id === id).Nombre;
    this.jugadoresByEquipo = this.jugadores.filter(x => x.Equipo.Id === id);
  }
  getEquiposByLiga(id: number, nombreLiga: string ) {
    this.nombreLiga = nombreLiga;
    this.nombreEquipo = 'Equipos';
    this.title = 'Jugadores';
    this.equiposByLiga = this.equipos.filter(x => x.Liga.Id === id);
  }
}
