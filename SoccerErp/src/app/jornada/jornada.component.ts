import { Component, OnInit } from "@angular/core";
import { Jornada } from "../models/jornada";
import { Liga } from "../models/liga";
import { ActivatedRoute } from "@angular/router";
import { LigaService } from "../services/liga.service";
import { JornadaService } from "../services/jornada.service";
import { PartidoService } from "../services/partido.service";

@Component({
  selector: "app-jornada",
  templateUrl: "./jornada.component.html",
  styleUrls: ["./jornada.component.scss"]
})
export class JornadaComponent implements OnInit {
  ligas: Liga[];
  jornadas: Jornada[];
  jornadasByLiga: Jornada[];
  jornada: Jornada;
  jornadasDropdown: Jornada[];
  ligaId: number;
  title = "Jornadas";
  titleDrpLiga = "Ligas";
  titleDrpJornada = "Jornadas";
  isSuccess = false;
  successMsg: string;
  isError = false;
  errorMsg: string;
  errors: any;
  isLoading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private ligaService: LigaService,
    private jornadaService: JornadaService
  ) {}

  ngOnInit() {
    this.jornadas = [];
    this.ligas = [];
    this.jornadasByLiga = [];
    this.getLigas();
    this.ligaId = +this.route.snapshot.paramMap.get("id");
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
    this.isLoading = true;
    this.jornadaService.getJornadasByLiga(idLiga).subscribe(
      res => {
        this.jornadas = res;
        this.jornadasByLiga = res;
        this.jornadasDropdown = this.jornadasByLiga;
        if (
          this.jornadasByLiga.length > 0 &&
          this.jornadasByLiga[0].liga != null
        ) {
          this.title = this.jornadasByLiga[0].liga.nombre;
          this.titleDrpLiga = this.jornadasByLiga[0].liga.nombre;
        } else {
          this.title = "Jornadas";
          this.titleDrpLiga = "Ligas";
        }
        this.isLoading = false;
      },
      error => {
        this.errorMsg = error;
        this.errors = error;
        this.isError = true;
        this.isLoading = false;
      }
    );
    this.titleDrpJornada = "Jornadas";
  }
  getJornadaById(idJornada: number) {
    this.jornadasByLiga = this.jornadas.filter(x => x.id === idJornada);
    this.titleDrpJornada = this.jornadasByLiga[0].descripcion;
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
  restoreJornadas(){
    this.jornadasByLiga = this.jornadas;
    this.titleDrpJornada = "Jornadas";
  }
}
