import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from 'src/app/models/equipo';
import { Liga } from 'src/app/models/liga';

@Component({
  selector: 'app-equipo-forma',
  templateUrl: './equipo-forma.component.html',
  styleUrls: ['./equipo-forma.component.scss']
})
export class EquipoFormaComponent implements OnInit {
  equipoId: number;
  equipos: Equipo[];
  title: string;
  equipo: Equipo;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.equipo = new Equipo();
    this.equipo.Liga = {
      Id: ''
    };
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
        Nombre: 'Real Madrid',
        Capitan: 'Rodrigo Mendoza',
        TelefonoContacto: '3367896543',
        Comentarios: 'Cuenta con jugador suspendido',
        GolesFavor: 36,
        GolesContra: 18,
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
        Id: 4,
        Nombre: 'Manchester United',
        Capitan: 'Ricardo Gonzalez',
        TelefonoContacto: '3333212567',
        Comentarios: '',
        GolesFavor: 40,
        GolesContra: 28,
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
        Id: 5,
        Nombre: 'Bayern Munich',
        Capitan: 'Marcos Gonzalez',
        TelefonoContacto: '3367658900',
        Comentarios: 'Juego Pendiente',
        GolesFavor: 30,
        GolesContra: 48,
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
        Id: 5,
        Nombre: 'Manchester City',
        Capitan: 'Felix Alba',
        TelefonoContacto: '3367658900',
        Comentarios: 'Juego Pendiente',
        GolesFavor: 50,
        GolesContra: 48,
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
        Id: 6,
        Nombre: 'Porto',
        Capitan: 'Felix Alba',
        TelefonoContacto: '3367658900',
        Comentarios: 'Adeudos',
        GolesFavor: 20,
        GolesContra: 48,
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
        Id: 7,
        Nombre: 'PSG',
        Capitan: 'Alexis Juarez',
        TelefonoContacto: '3367658900',
        Comentarios: '',
        GolesFavor: 25,
        GolesContra: 25,
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
        Nombre: 'Boca Juniors',
        Capitan: 'Oscar Sanchez',
        TelefonoContacto: '3367658900',
        Comentarios: 'Documentos pendientes',
        GolesFavor: 25,
        GolesContra: 25,
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
      }
    ];
    this.equipoId = +this.route.snapshot.paramMap.get('id');

    if (this.equipoId !== 0) {
      this.getEquipo(this.equipoId);
      this.title = this.equipo.Nombre;
    } else {
      this.title = 'Nuevo Equipo';
    }
  }

  getEquipo(id: number) {
    this.equipo = this.equipos.find(x => x.Id === id);
  }
  saveEquipo(equipo: Equipo) {
    console.log('Saving Equipo');
  }
}
