import { Component, OnInit } from '@angular/core';
import { Equipo } from '../models/equipo';
import { ActivatedRoute } from '@angular/router';
import { Liga } from '../models/liga';
import { EquipoService } from '../services/equipo.service';
import { LigaService } from '../services/liga.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {
  equipos: Equipo[];
  ligaId: number;
  equiposByLiga: Equipo[];
  ligas: Liga[];
  title = 'Equipos';
  titleDrp = 'Ligas';
  equiposApi: Equipo[];
  errors: any;
  isSuccess = false;
  successMsg: string;
  isError = false;
  errorMsg: string;
  constructor(
    private route: ActivatedRoute,
    private equipoService: EquipoService,
    private ligaService: LigaService
  ) {}

  ngOnInit() {
    this.ligaId = +this.route.snapshot.paramMap.get('id');
    this.getEquipos();
    this.getLigas();
    if (this.ligaId !== 0) {
      this.getEquiposByLiga(this.ligaId);
    }
  }
  getEquiposByLiga(id: number) {
    this.ligaId = id;
    this.equipoService.getEquiposByLiga(id).subscribe(res => {
      this.equiposByLiga = res;
      this.title = this.equiposByLiga[0].liga.nombre;
      this.titleDrp = this.equiposByLiga[0].liga.nombre;
    });
  }
  getEquipos() {
    this.equipoService.getEquipos().subscribe(res => {
      this.equipos = res;
    });
  }
  getLigas() {
    this.ligaService.getligas().subscribe(res => {
      this.ligas = res;
    });
  }
  createTorneo(id: number) {
    this.ligaService.createTorneo(id).subscribe(
      res => {
        if (res.status === 'BadRequest') {
          this.isError = true;
          this.errorMsg = res.message;
          this.errors = res.message;
        } else {
          this.isSuccess = true;
          this.successMsg = res.message;
        }
      },
      error => {
        this.errorMsg = error.error.message;
        this.errors = error.error.message;
        this.isError = true;
      }
    );
  }
}
