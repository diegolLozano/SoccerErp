import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Partido } from "../models/partido";
import { Anotador } from "../models/anotador";
import { Amonestado } from "../models/amonestado";
import { Expulsado } from "../models/expulsado";
import { PartidoService } from "../services/partido.service";
import { Equipo } from "../models/equipo";
import { Jornada } from "../models/jornada";

@Component({
  selector: "app-partido",
  templateUrl: "./partido.component.html",
  styleUrls: ["./partido.component.scss"]
})
export class PartidoComponent implements OnInit {
  partidoId: number;
  partidos: Partido[];
  partido: Partido;
  anotadoresEquipo1: Anotador[];
  anotadoresEquipo2: Anotador[];
  amonestados: Amonestado[];
  expulsados: Expulsado[];
  isSuccess = false;
  successMsg: string;
  isError = false;
  errorMsg: string;
  errors: any;
  constructor(
    private route: ActivatedRoute,
    private partidoService: PartidoService
  ) {}

  ngOnInit() {
    this.partidos = [];
    this.partido = {
      equipo1: new Equipo(),
      equipo2: new Equipo(),
      jornada: new Jornada()
    };

    this.partidoId = +this.route.snapshot.paramMap.get("id");

    if (this.partidoId !== 0) {
      this.getPartidoInfoById(this.partidoId);
    }
  }
  getPartidoInfoById(id: number) {
    this.partidoService.getPartido(id).subscribe(
      res => {
        this.partido = res;
        this.anotadoresEquipo1 = this.partido.anotadores.filter(
          x => x.jugador.equipo.id === this.partido.equipo1.id
        );
        this.anotadoresEquipo2 = this.partido.anotadores.filter(
          x => x.jugador.equipo.id === this.partido.equipo2.id
        );
      },
      error => {
        this.errorMsg = error;
        this.errors = error;
        this.isError = true;
      }
    );
    /*     this.anotadoresEquipo1 = this.partido.Anotadores.filter(
      x => x.jugador.equipo.nombre === this.partido.Equipo1.nombre
    );
    this.anotadoresEquipo2 = this.partido.Anotadores.filter(
      x => x.jugador.equipo.nombre === this.partido.Equipo2.nombre
    ); */
  }
}
