import { Component, OnInit } from '@angular/core';
import { Partido } from 'src/app/models/partido';
import { ActivatedRoute } from '@angular/router';
import { Liga } from 'src/app/models/liga';
import { Jornada } from 'src/app/models/jornada';
import { Equipo } from 'src/app/models/equipo';
import { Jugador } from 'src/app/models/jugador';

@Component({
  selector: 'app-partido-forma',
  templateUrl: './partido-forma.component.html',
  styleUrls: ['./partido-forma.component.scss']
})
export class PartidoFormaComponent implements OnInit {
  partidoId: number;
  partido: Partido;
  partidos: Partido[];
  ligas: Liga[];
  jornadas: Jornada[];
  jornadasByLiga: Jornada[];
  equiposByLiga: Equipo[];
  equipos: Equipo[];
  jugadoresEquipo1: Jugador[];
  jugadoresEquipo2: Jugador[];
  jugadores: Jugador[];
  title = 'Nuevo Partido';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.partido = {
      jornada: {
        id: '',
        liga: {
          id: ''
        }
      },
      equipo1: {
        id: '',
        nombre: '',
        capitan: ''
      },
      equipo2: {
        id: '',
        nombre: '',
        capitan: ''
      }
    };
    this.partidoId = +this.route.snapshot.paramMap.get('id');
    this.partidos = [];

    this.ligas = [];
    this.jornadas = [];
/*     this.equipos = [
      {
        Id: 1,
        Nombre: 'Juventus',
        capitan: 'Luis Miramontes',
        TelefonoContacto: '3345367890',
        Comentarios: 'Sin Adeudos',
        GolesFavor: 30,
        GolesContra: 8,
        liga: {
          id: 1,
          nombre: 'Sabatina',
          costo: '500',
          diasDeSemana: 'Sabado'
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
        liga: {
          id: 1,
          nombre: 'Sabatina',
          costo: '500',
          diasDeSemana: 'Sabado'
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
        liga: {
          id: 2,
          nombre: 'Maculina Semanal',
          costo: '450',
          diasDeSemana: 'Lunes, Martes, Miercoles'
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
        liga: {
          id: 2,
          nombre: 'Maculina Semanal',
          costo: '450',
          diasDeSemana: 'Lunes, Martes, Miercoles'
        }
      },
      {
        Id: 15,
        Nombre: 'Bayern Munich',
        Capitan: 'Marcos Gonzalez',
        TelefonoContacto: '3367658900',
        Comentarios: 'Juego Pendiente',
        GolesFavor: 30,
        GolesContra: 48,
        liga: {
          id: 3,
          nombre: 'Femenina Semanal',
          costo: '450',
          diasDeSemana: 'Sabado'
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
        liga: {
          id: 2,
          nombre: 'Maculina Semanal',
          costo: '450',
          diasDeSemana: 'Lunes, Martes, Miercoles',
          ubicacion: {
            Id: 1,
            Nombre: 'SoccerLifeBajio',
            Calle: '',
            Numero: ''
          }
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
        liga: {
          id: 2,
          nombre: 'Maculina Semanal',
          costo: '450',
          diasDeSemana: 'Lunes, Martes, Miercoles',
          ubicacion: {
            Id: 1,
            Nombre: 'SoccerLifeBajio',
            Calle: '',
            Numero: ''
          }
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
        liga: {
          id: 4,
          nombre: 'Femenina Fin de Semana',
          costo: '400',
          diasDeSemana: 'Sabado, Domingo'
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
        liga: {
          id: 1,
          nombre: 'Sabatina',
          costo: '500',
          diasDeSemana: 'Sabado'
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
        liga: {
          id: 2,
          nombre: 'Maculina Semanal',
          costo: '450',
          diasDeSemana: 'Lunes, Martes, Miercoles'
        }
      }
    ]; */
    this.jugadores = [];
    if (this.partidoId !== 0) {
      this.getPartidoById(this.partidoId);
      this.title = this.partido.equipo1Nombre + ' vs ' + this.partido.equipo2Nombre;
    }
  }
  getPartidoById(id: number) {
    this.partido = this.partidos.find(x => x.id === id);
    if (this.partido != null) {
      this.getInfoByLiga(this.partido.jornada.liga.id);
      this.jugadoresEquipo1 = this.jugadores.filter(
        x => x.equipo.id === this.partido.equipo1.id
      );
      this.jugadoresEquipo2 = this.jugadores.filter(
        x => x.equipo.id === this.partido.equipo2.id
      );
    }
  }
  getInfoByLiga(id: number) {
    this.jornadasByLiga = this.jornadas.filter(x => x.liga.id === +id);
    this.equiposByLiga = this.equipos.filter(x => x.liga.id === +id);
  }
  getJornadasByLiga(ligaId: number) {
    this.jornadasByLiga = this.jornadas.filter(x => x.liga.id === +ligaId);
  }
  getJugadoresByEquipo(id: number) {}
}
