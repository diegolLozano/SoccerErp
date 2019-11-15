import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Liga } from 'src/app/models/liga';

@Component({
  selector: 'app-liga-forma',
  templateUrl: './liga-forma.component.html',
  styleUrls: ['./liga-forma.component.scss']
})
export class LigaFormaComponent implements OnInit {
  sub: any;
  id: number;
  ligas: Liga[];
  liga: Liga = new Liga();
  title: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
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
    this.id = +this.route.snapshot.paramMap.get('id');

    if (this.id !== 0) {
      this.getLiga();
      this.title = this.liga.Nombre;
    } else {
      this.title = 'Nueva Liga';
    }
  }
  getLiga() {
    this.liga = this.ligas.find(x => x.Id === this.id);
  }
  saveLiga() {
    console.log('saving liga');
  }
}
