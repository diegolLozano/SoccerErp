import { Component, OnInit } from "@angular/core";
import { Jornada } from "src/app/models/jornada";
import { ActivatedRoute } from "@angular/router";
import { Liga } from "src/app/models/liga";
import { LigaService } from "src/app/services/liga.service";
import { JornadaService } from "src/app/services/jornada.service";
import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { getLocaleTimeFormat } from "@angular/common";

@Component({
  selector: "app-jornada-forma",
  templateUrl: "./jornada-forma.component.html",
  styleUrls: ["./jornada-forma.component.scss"]
})
export class JornadaFormaComponent implements OnInit {
  jornadaId: number;
  jornada: Jornada;
  jornadas: Jornada[];
  ligas: Liga[];
  title = "Nueva Jornada";
  errors: any;
  isSuccess = false;
  successMsg: string;
  isError = false;
  errorMsg: string;
  constructor(
    private route: ActivatedRoute,
    private ligaService: LigaService,
    private jornadaService: JornadaService
  ) {}

  ngOnInit() {
    this.jornada = { ligaId: "" };

    this.jornadaId = +this.route.snapshot.paramMap.get("id");
    this.jornadas = [];
    this.getLigas();
    if (this.jornadaId !== 0) {
      this.getJornadaById(this.jornadaId);
    }
  }
  getJornadaById(jornadaId: number) {
    this.jornadaService.getJornada(jornadaId).subscribe(
      res => {
        if (res == null) {
          this.resetValues();
        } else {
          this.jornada = res;
          const fechain = new Date(this.jornada.fechaInicio.toString());
          const fechafin = new Date(this.jornada.fechaFinal.toString());
          this.jornada.fechaInicioStrc = new NgbDate(
            fechain.getFullYear(),
            fechain.getMonth() + 1,
            fechain.getDate()
          );
          this.jornada.fechaFinalStrc = new NgbDate(
            fechafin.getFullYear(),
            fechafin.getMonth() + 1,
            fechafin.getDate()
          );
          this.title = this.jornada.descripcion;
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
  saveJornada() {
    this.jornada.fechaInicio = new Date(
      this.jornada.fechaInicioStrc.year,
      this.jornada.fechaInicioStrc.month - 1,
      this.jornada.fechaInicioStrc.day
    );
    this.jornada.fechaFinal = new Date(
      this.jornada.fechaFinalStrc.year,
      this.jornada.fechaFinalStrc.month - 1,
      this.jornada.fechaFinalStrc.day
    );
    if (this.jornada.id) {
      this.jornadaService
        .updateJornada(this.jornada.id, this.jornada)
        .subscribe(
          res => {
            this.successMsg = "Jornada fue editada correctamente";
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
      this.jornadaService.createJornada(this.jornada).subscribe(
        res => {
          this.successMsg = "Jornada fue creada correctamente";
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
  deleteJornada() {
    if (this.jornada.id) {
      this.jornadaService.deleteJornada(this.jornada.id).subscribe(
        res => {
          if (res.status === "BadRequest") {
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
    }
  }
  private resetValues() {
    this.jornada.ligaId = "";
    this.jornada = new Jornada();
    const today = new Date();
    this.jornada.fechaInicioStrc = new NgbDate(
      today.getFullYear(),
      today.getMonth() + 1,
      today.getDate()
    );
    this.jornada.fechaFinalStrc = new NgbDate(
      today.getFullYear(),
      today.getMonth() + 1,
      today.getDate()
    );
  }
}
