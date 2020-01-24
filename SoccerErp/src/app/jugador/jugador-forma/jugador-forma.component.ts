import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/models/jugador';
import { ActivatedRoute } from '@angular/router';
import { Liga } from 'src/app/models/liga';
import { Equipo } from 'src/app/models/equipo';
import { JugadorService } from 'src/app/services/jugador.service';
import { LigaService } from 'src/app/services/liga.service';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-jugador-forma',
  templateUrl: './jugador-forma.component.html',
  styleUrls: ['./jugador-forma.component.scss']
})
export class JugadorFormaComponent implements OnInit {
  jugadorId: number;
  jugador: Jugador;
  title = 'Nuevo Jugador';
  jugadores: Jugador[];
  ligas: Liga[];
  equipos: Equipo[];
  equiposByLiga: Equipo[];
  errors: any;
  isSuccess = false;
  successMsg: string;
  isError = false;
  errorMsg: string;
  selectedLiga: any = '';
  constructor(
    private route: ActivatedRoute,
    private jugadorService: JugadorService,
    private ligaService: LigaService,
    private equipoService: EquipoService
  ) {}

  ngOnInit() {
    this.jugador = new Jugador();
    this.jugador.equipoId = '';
    this.jugadores = [];
    this.equipos = [];
    this.jugadorId = +this.route.snapshot.paramMap.get('id');
    this.getLigas();
    if (this.jugadorId !== 0) {
      this.getJugadorById(this.jugadorId);
    } else {
    }
  }
  getJugadorById(id: number) {
    this.jugadorService.getJugador(id).subscribe(
      res => {
        this.jugador = res;
        this.getEquiposByLiga(this.jugador.equipo.ligaId);
        this.title = this.jugador.nombre + ' ' + this.jugador.apellidoPaterno;
      },
      error => {
        this.errorMsg = error;
        this.errors = error;
        this.isError = true;
      }
    );
  }
  getEquiposByLiga(id: number) {
    this.equipoService.getEquiposByLiga(id).subscribe(
      res => {
        this.equiposByLiga = res;
        if (this.equiposByLiga.length > 0) {
          this.selectedLiga = this.equiposByLiga[0].ligaId;
        } else {
          this.selectedLiga = '';
        }
      },
      error => {
        this.errorMsg = error;
        this.errors = error;
        this.isError = true;
      }
    );
  }
  getLigas() {
    this.ligaService.getligas().subscribe(
      res => {
        this.ligas = res;
      },
      error => {
        this.errorMsg = error;
        this.errors = error;
        this.isError = true;
      }
    );
  }
  saveJugador() {
    if (this.jugador.id) {
      this.jugadorService
        .updateJugador(this.jugador.id, this.jugador)
        .subscribe(
          res => {
            this.successMsg = 'Jugador a sido editado exitosamente';
            this.isSuccess = true;
            this.resetValues();
          },
          error => {
            this.errorMsg = error;
            this.errors = error;
            this.isError = true;
          }
        );
    } else {
      this.jugadorService.createJugador(this.jugador).subscribe(
        res => {
          this.successMsg = 'Jugador a sido creado exitosamente';
          this.isSuccess = true;
          this.resetValues();
        },
        error => {
          this.errorMsg = error;
          this.errors = error;
          this.isError = true;
        }
      );
    }
  }
  deleteJugador() {
    if (this.jugador.id) {
      this.jugadorService.deleteJugador(this.jugador.id).subscribe(
        res => {
          this.successMsg = 'Jugador a sido borrado exitosamente';
          this.isSuccess = true;
          this.resetValues();
        },
        error => {
          this.errorMsg = error;
          this.errors = error;
          this.isError = true;
        }
      );
    }
  }
  private resetValues() {
    this.jugador = new Jugador();
    this.selectedLiga = '';
    this.jugador.equipoId = '';
    this.title = 'Nuevo Jugador';
    this.equiposByLiga = [];
  }
}
