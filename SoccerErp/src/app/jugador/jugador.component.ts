import { Component, OnInit } from '@angular/core';
import { Jugador } from '../models/jugador';
import { ActivatedRoute } from '@angular/router';
import { Liga } from '../models/liga';
import { Equipo } from '../models/equipo';
import { JugadorService } from '../services/jugador.service';
import { EquipoService } from '../services/equipo.service';
import { LigaService } from '../services/liga.service';

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
  constructor(
    private route: ActivatedRoute,
    private jugadorService: JugadorService,
    private equipoService: EquipoService,
    private ligaService: LigaService
  ) {}

  ngOnInit() {
    this.equipos = [];
    this.equipoId = +this.route.snapshot.paramMap.get('id');
    this.getLigas();
    this.title = 'Jugadores';
    if (this.equipoId !== 0) {
      this.getJugadoresByEquipo(this.equipoId, 'Equipos');
      // this.nombreEquipo = "Equipos";
    }
  }
  getJugadoresByEquipo(id: number, nombre: string) {
    this.jugadoresByEquipo = [];
    this.nombreEquipo = nombre;
    this.jugadorService.getJugadoresByEquipo(id).subscribe(res => {
      this.jugadoresByEquipo = res;
      if (this.jugadoresByEquipo.length > 0) {
        this.title = this.jugadoresByEquipo.find(x => x.equipoId === id).nombre;
      }
      if (
        this.jugadoresByEquipo.length > 0 &&
        this.jugadoresByEquipo[0].equipo != null
      ) {
        this.title = this.jugadoresByEquipo[0].equipo.nombre;
      }
    });
  }
  getEquiposByLiga(id: number, nombreLiga: string) {
    this.nombreLiga = nombreLiga;
    this.equipoService.getEquiposByLiga(id).subscribe(res => {
      this.equiposByLiga = res;
      this.nombreEquipo = 'Equipos';
      this.title = 'Jugadores';
    });
  }
  getLigas() {
    this.ligaService.getligas().subscribe(res => {
      this.ligas = res;
    });
  }
}
