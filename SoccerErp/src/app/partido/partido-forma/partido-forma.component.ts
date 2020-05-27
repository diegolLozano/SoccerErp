import { Component, OnInit, ElementRef } from "@angular/core";
import { Partido } from "src/app/models/partido";
import { ActivatedRoute } from "@angular/router";
import { Liga } from "src/app/models/liga";
import { Jornada } from "src/app/models/jornada";
import { Equipo } from "src/app/models/equipo";
import { Jugador } from "src/app/models/jugador";
import { PartidoService } from "src/app/services/partido.service";
import { JornadaService } from "src/app/services/jornada.service";
import { EquipoService } from "src/app/services/equipo.service";
import { LigaService } from "src/app/services/liga.service";
import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { JugadorService } from "src/app/services/jugador.service";
import { tap, finalize } from "rxjs/operators";
import { Anotador } from "src/app/models/anotador";
import { Amonestado } from "src/app/models/amonestado";
import { Expulsado } from "src/app/models/expulsado";
import { Form } from "@angular/forms";

@Component({
  selector: "app-partido-forma",
  templateUrl: "./partido-forma.component.html",
  styleUrls: ["./partido-forma.component.scss"]
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
  title = "Nuevo Partido";
  errors: any;
  isSuccess = false;
  successMsg: string;
  isError = false;
  errorMsg: string;
  constructor(
    private route: ActivatedRoute,
    private partidoService: PartidoService,
    private jornadaService: JornadaService,
    private equipoService: EquipoService,
    private ligaService: LigaService,
    private jugadorService: JugadorService
  ) {}

  ngOnInit() {
    this.partido = {};
    this.partidoId = +this.route.snapshot.paramMap.get("id");
    this.partidos = [];
    this.jornadas = [];
    this.jugadores = [];
    this.jugadoresEquipo1 = [];
    this.jugadoresEquipo2 = [];
    this.resetValues();
    this.getLigas();
    if (this.partidoId !== 0) {
      this.getPartidoById(this.partidoId);
    }
  }
  getPartidoById(id: number) {
    this.partidoService
      .getPartido(id)
      .pipe(
        finalize(() => {
          console.log("test");
        })
      )
      .subscribe(
        res => {
          this.partido = res;
          if (this.partido != null) {
            this.title =
              this.partido.equipo1.nombre +
              " vs " +
              this.partido.equipo2.nombre;
            this.getInfoByLiga(this.partido.jornada.ligaId);
            const fechaJuego = new Date(this.partido.fechaJuego.toString());
            this.partido.fechaJuegoStrc = new NgbDate(
              fechaJuego.getFullYear(),
              fechaJuego.getMonth() + 1,
              fechaJuego.getDate()
            );
            this.jugadores = this.partido.jugadores;
            this.setJugadorValues(this.partido);

            if (this.jugadores != null) {
              this.jugadoresEquipo1 = this.jugadores.filter(
                x => x.equipoId === this.partido.equipo1.id
              );
              this.jugadoresEquipo2 = this.jugadores.filter(
                x => x.equipoId === this.partido.equipo2.id
              );
            }
            if (this.partido.ganadorId === this.partido.equipo1.id) {
              this.partido.isGanador1 = true;
            }
            if (this.partido.ganadorId === this.partido.equipo2.id) {
              this.partido.isGanador2 = true;
            }
          }
        },
        error => {
          this.errorMsg = error;
          this.errors = error;
          this.isError = true;
        }
      );
  }
  getInfoByLiga(id: number) {
    this.jornadaService.getJornadasByLiga(id).subscribe(
      res => {
        this.jornadasByLiga = res;
        if (this.jornadasByLiga.length > 0) {
          this.equipoService
            .getEquiposByLiga(this.jornadasByLiga[0].ligaId)
            .subscribe(
              resp => {
                this.equiposByLiga = resp;
              },
              error => {
                this.errorMsg = error;
                this.errors = error;
                this.isError = true;
              }
            );
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
  getJornadasByLiga(ligaId: number) {
    this.jornadasByLiga = this.jornadas.filter(x => x.liga.id === +ligaId);
  }
  savePartido(form: Form) {
    if (this.partido.isGanador1) {
      this.partido.ganadorId = this.partido.equipo1.id;
    }
    if (this.partido.isGanador2) {
      this.partido.ganadorId = this.partido.equipo2.id;
    }
/*     if (
      (this.partido.isGanador2 === false ||
        this.partido.isGanador2 === undefined) &&
      (this.partido.isGanador1 === false ||
        this.partido.isGanador1 === undefined) &&
      (this.partido.empate === false || this.partido.empate === undefined)
    ) {
      this.errorMsg = "";
      this.errors = "Es obligatorio seleccionar un ganador o empate";
      this.isError = true;
      return false;
    } */

    if (this.partido.id) {
      const jugadoresEditados = this.partido.jugadores;
      const anotadores: Anotador[] = [];
      const amonestados: Amonestado[] = [];
      const expulsados: Expulsado[] = [];
     /* this.partido.anotadores.forEach(function(anotador) {
        const temp = jugadoresEditados.find(x => x.id === anotador.jugador.id);
        if (temp != null) {
          anotador.numeroDeGoles = +temp.numeroDeGoles;
          if (temp.numeroDeGoles <= 0) {
            anotador.numeroDeGoles = null;
          }
        }
      });
       this.partido.amonestados.forEach(function(amonestado) {
        const temp = jugadoresEditados.find(
          x => x.id === amonestado.jugador.id
        );
        if (temp != null) {
          amonestado.comentarios = "";
        }
      });
      this.partido.expulsados.forEach(function(expulsado) {
        const temp = jugadoresEditados.find(x => x.id === expulsado.jugador.id);
        if (temp != null) {
          expulsado.comentarios =
            temp.isAmonestado && temp.isExpulsado ? "Doble Amarilla" : "";
          expulsado.dobleAmarilla =
            temp.isAmonestado && temp.isExpulsado ? true : false;
        }
      }); */
      if (jugadoresEditados != null) {
        jugadoresEditados.forEach(function(jugador) {
          //let result = anotadoresPartido.find(x => x.jugador.id === jugador.id);
          if (jugador.numeroDeGoles > 0 && jugador.numeroDeGoles != null) {
            const anotador: Anotador = {
              numeroDeGoles: jugador.numeroDeGoles,
              jugador
            };
            anotadores.push(anotador);
          }
          //result = amonestadosPartido.find(x => x.jugador.id === jugador.id);
          if (jugador.isAmonestado && !jugador.isExpulsado) {
            const amonestado: Amonestado = {
              jugador
            };
            amonestados.push(amonestado);
          }
          if (jugador.isExpulsado) {
            const expulsado: Expulsado = {
              dobleAmarilla:
                jugador.isAmonestado && jugador.isExpulsado ? true : false,
              jugador
            };
            expulsados.push(expulsado);
          }
        });
      }
      this.partido.anotadores = anotadores;
      this.partido.amonestados = amonestados;
      this.partido.expulsados = expulsados;
      this.partido.fechaJuego = new Date(
        this.partido.fechaJuegoStrc.year,
        this.partido.fechaJuegoStrc.month - 1,
        this.partido.fechaJuegoStrc.day
      );
      this.partidoService
        .updatePartido(this.partido.id, this.partido)
        .subscribe(
          res => {
            if (res.status == "BadRequest") {
              this.isError = true;
              this.errorMsg = res.message;
              this.errors = res.message;
            } else {
              this.isSuccess = true;
              this.successMsg = res.message;
              this.resetValues();
            }
          },
          error => {
            this.errorMsg = error;
            this.errors = error;
            this.isError = true;
          }
        );
    } else {
      this.partido.equipo1 = null;
      this.partido.equipo2 = null;
      this.partido.jornada = { ligaId: 0 };
      this.partidoService.createPartido(this.partido).subscribe(
        res => {
          if (res.status == "BadRequest") {
            this.isError = true;
            this.errorMsg = res.message;
            this.errors = res.message;
            this.resetValues();
          } else {
            this.isSuccess = true;
            this.successMsg = res.message;
            this.resetValues();
          }
        },
        error => {
          this.errorMsg = error;
          this.errors = error;
          this.isError = true;
        }
      );
    }
    window.scroll(0,0);
  }
  deletePartido() {
    if (this.partido.id) {
      this.partidoService.deletePartido(this.partido.id).subscribe(
        res => {
          this.successMsg = "Partido a sido borrado exitosamente";
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
  setJugadorValues(partido: Partido) {
    if (this.jugadores != null) {
      this.jugadores.forEach(function(jugador) {
        const anotador = partido.anotadores.find(
          x => x.jugador.id == jugador.id
        );
        if (anotador != null) {
          jugador.numeroDeGoles = anotador.numeroDeGoles;
        }
        const amonestado = partido.amonestados.find(
          x => x.jugador.id == jugador.id
        );
        if (amonestado != null) {
          jugador.isAmonestado = true;
        }
        const expulsado = partido.expulsados.find(
          x => x.jugador.id == jugador.id
        );
        if (expulsado != null) {
          jugador.isExpulsado = true;
        }
      });
    }
  }
  empateReset() {
    this.partido.isGanador1 = false;
    this.partido.isGanador2 = false;
  }
  resetValues() {
    this.partido = {
      jornada: {
        ligaId: ""
      },
      jornadaId: "",
      equipo1Id: "",
      equipo2Id: ""
    };
    this.jugadoresEquipo1.forEach(function(jugador) {
      jugador.numeroDeGoles = null;
      jugador.isAmonestado = null;
      jugador.isExpulsado = null;
    });
    this.jugadoresEquipo2.forEach(function(jugador) {
      jugador.numeroDeGoles = null;
      jugador.isAmonestado = null;
      jugador.isExpulsado = null;
    });
  }
}
