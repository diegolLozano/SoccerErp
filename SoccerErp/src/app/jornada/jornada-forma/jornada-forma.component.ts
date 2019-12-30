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
  title = 'Nueva Jornada';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.jornada = {
      liga: {
        id: ''
      }
    };

    this.jornadaId = +this.route.snapshot.paramMap.get('id');
    this.jornadas = [];
    this.ligas = [];
    if (this.jornadaId !== 0) {
      this.getJornadaById(this.jornadaId);
    }
  }
  getJornadaById(jornadaId: number) {
    this.jornada = this.jornadas.find(x => x.id === jornadaId);
    this.title = this.jornada.descripcion;
  }
}
