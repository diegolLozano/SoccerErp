import { Component, OnInit } from '@angular/core';
import { TablaGeneral } from '../models/tabla-general';
import { ActivatedRoute } from '@angular/router';
import { TablaGeneralService } from '../services/tabla-general.service';
import { Liga } from '../models/liga';
import { LigaService } from '../services/liga.service';

@Component({
  selector: 'app-tabla-general',
  templateUrl: './tabla-general.component.html',
  styleUrls: ['./tabla-general.component.scss']
})
export class TablaGeneralComponent implements OnInit {
  ligaId: number;
  tablaGeneral: TablaGeneral[];
  ligas: Liga[];
  titleDrp = 'Ligas';
  title = 'Tabla General';
  constructor(
    private route: ActivatedRoute,
    private tablaService: TablaGeneralService,
    private ligaService: LigaService
  ) {}

  ngOnInit() {
    this.ligaId = +this.route.snapshot.paramMap.get('id');
    this.tablaGeneral = [];
    this.getLigas();
    if (this.ligaId !== 0) {
      this.getTablaGeneralByLiga(this.ligaId);
    }
  }
  getTablaGeneralByLiga(ligaId: number) {
    this.tablaService.getTablaGeneral(ligaId).subscribe(
      res => {
        this.tablaGeneral = res;
        if (this.tablaGeneral.length > 0) {
          this.title = this.tablaGeneral[0].equipo.liga.nombre;
        } else {
          this.title = 'Tabla General';
        }
      },
      error => {}
    );
  }
  getLigas() {
    this.ligaService.getligas().subscribe(res => {
      this.ligas = res;
    });
  }
}
