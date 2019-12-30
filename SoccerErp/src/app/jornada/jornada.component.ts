import { Component, OnInit } from '@angular/core';
import { Jornada } from '../models/jornada';
import { Liga } from '../models/liga';
import { ActivatedRoute } from '@angular/router';
import { LigaService } from '../services/liga.service';
import { JornadaService } from '../services/jornada.service';
import { PartidoService } from '../services/partido.service';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.component.html',
  styleUrls: ['./jornada.component.scss']
})
export class JornadaComponent implements OnInit {
  ligas: Liga[];
  jornadas: Jornada[];
  jornadasByLiga: Jornada[];
  jornadasDropdown: Jornada[];
  ligaId: number;
  title = 'Jornadas';
  titleDrpLiga = 'Ligas';
  titleDrpJornada = 'Jornadas';
  constructor(
    private route: ActivatedRoute,
    private ligaService: LigaService,
    private jornadaService: JornadaService,
    private partidoService: PartidoService
  ) {}

  ngOnInit() {
    this.jornadas = [];
    this.ligas = [];
    this.getLigas();
    this.ligaId = +this.route.snapshot.paramMap.get('id');
    if (this.ligaId !== 0) {
      this.getJornadasByLiga(this.ligaId);
      if (
        this.jornadasByLiga.length > 0 &&
        this.jornadasByLiga[0].liga != null
      ) {
        this.title = this.jornadasByLiga[0].liga.nombre;
        this.titleDrpLiga = this.jornadasByLiga[0].liga.nombre;
      }
    }
  }
  getJornadasByLiga(idLiga: number) {
    this.jornadaService.getJornadasByLiga(idLiga).subscribe(res => {
      this.jornadasByLiga = res;
      this.jornadasDropdown = this.jornadasByLiga;
      if (this.jornadasByLiga.length > 0 && this.jornadasByLiga[0].liga != null) {
        this.title = this.jornadasByLiga[0].liga.nombre;
        this.titleDrpLiga = this.jornadasByLiga[0].liga.nombre;
        this.jornadasByLiga[0].partidos = [
          {
            equipo1: { nombre: 'Barcelona', capitan: 'Lionel Messi'},
            equipo2: { nombre: 'Real Madrid' , capitan : 'Luka Modric'}
          }
        ];
      } else {
        this.title = 'Jornadas';
        this.titleDrpLiga = 'Ligas';
      }
    });
    this.titleDrpJornada = 'Jornadas';
  }
/*   getJornadaById(idJornada: number) {
    this.jornadaService.getJornada(idJornada).subscribe(res => {
      this.jornadasByLiga = res;
    if (this.jornadasByLiga.length > 0) {
      this.titleDrpJornada = this.jornadasByLiga[0].descripcion;
    } else {
      this.titleDrpJornada = "Jornadas";
    }
    });
  } */
  getLigas() {
    this.ligaService.getligas().subscribe(res => {
      this.ligas = res;
    });
  }
}
