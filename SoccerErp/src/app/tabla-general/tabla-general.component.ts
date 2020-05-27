import { Component, OnInit } from "@angular/core";
import { TablaGeneral } from "../models/tabla-general";
import { ActivatedRoute } from "@angular/router";
import { TablaGeneralService } from "../services/tabla-general.service";
import { Liga } from "../models/liga";
import { LigaService } from "../services/liga.service";
import { finalize } from "rxjs/operators";

@Component({
  selector: "app-tabla-general",
  templateUrl: "./tabla-general.component.html",
  styleUrls: ["./tabla-general.component.scss"]
})
export class TablaGeneralComponent implements OnInit {
  ligaId: number;
  tablaGeneral: TablaGeneral[];
  ligas: Liga[];
  titleDrp = "Ligas";
  title = "Tabla General";
  isSuccess = false;
  successMsg: string;
  isError = false;
  errorMsg: string;
  errors: any;
  isLoading: boolean = false;
  isLoadingFile: boolean = false;
  showHeaders: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private tablaService: TablaGeneralService,
    private ligaService: LigaService
  ) {}

  ngOnInit() {
    this.ligaId = +this.route.snapshot.paramMap.get("id");
    this.tablaGeneral = [];
    this.getLigas();
    if (this.ligaId !== 0) {
      this.getTablaGeneralByLiga(this.ligaId);
    }
  }
  getTablaGeneralByLiga(ligaId: number) {
    this.isLoading = true;
    this.ligaId = ligaId;
    this.tablaService
      .getTablaGeneral(ligaId)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(
        res => {
          this.tablaGeneral = res;
          if (this.tablaGeneral.length > 0) {
            this.title = this.tablaGeneral[0].equipo.liga.nombre;
          } else {
            this.title = "Tabla General";
          }
        },
        error => {
          this.errorMsg = error;
          this.errors = error;
          this.isError = true;
          this.tablaGeneral = [];
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
  generatePdf() {
    this.isLoadingFile = true;
    this.tablaService
      .getTablaGeneralPdf(this.ligaId)
      .pipe(finalize(() => (this.isLoadingFile = false)))
      .subscribe(
        res => {
          this.downLoadFile(res, "application/pdf");
        },
        error => {
          this.errorMsg = error;
          this.errors = error;
          this.isError = true;
        }
      );
  }
  downLoadFile(data: any, type: string) {
    const blob = new Blob([data], { type });
    const url = window.URL.createObjectURL(blob);
    const pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == "undefined") {
      // Please disable your Pop-up blocker and try again.
      alert(
        "Por favor deshabilita el bloqueador de Pop-up en tu navegador e intenta de nuevo"
      );
    }
  }
}
