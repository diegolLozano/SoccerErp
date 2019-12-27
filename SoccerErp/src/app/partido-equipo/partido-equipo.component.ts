import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Partido } from '../models/partido';
import { Equipo } from '../models/equipo';
import { PartidoService } from '../services/partido.service';

@Component({
  selector: 'app-partido-equipo',
  templateUrl: './partido-equipo.component.html',
  styleUrls: ['./partido-equipo.component.scss']
})
export class PartidoEquipoComponent implements OnInit {
  partidos: Partido[];
  equipoId: number;
  partidosByEquipo: Partido[];
  title: string;
  equipos: Equipo[];
  constructor(private route: ActivatedRoute,
              private partidoService: PartidoService) {}

  ngOnInit() {
    this.partidos = [];
    this.equipos = [];
    this.equipoId = +this.route.snapshot.paramMap.get('id');
    if (this.equipoId !== 0) {
      this.getPartidosByEquipo(this.equipoId);
    }
  }
  getPartidosByEquipo(id: number) {
    this.partidoService.getPartidosByequipo(id).subscribe(res => {
      this.partidosByEquipo = res;
      if (this.partidosByEquipo.length > 0) {
        this.title = this.partidosByEquipo[0].equipo1Nombre;
      }
    });
    // this.partidosByEquipo = this.partidos.filter(x => x.Equipo1.id === id || x.Equipo2.id === id);
  }
}
