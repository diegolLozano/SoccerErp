import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from 'src/app/models/equipo';
import { Liga } from 'src/app/models/liga';
import { EquipoService } from 'src/app/services/equipo.service';
import { LigaService } from 'src/app/services/liga.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-equipo-forma',
  templateUrl: './equipo-forma.component.html',
  styleUrls: ['./equipo-forma.component.scss']
})
export class EquipoFormaComponent implements OnInit {
  equipoId: number;
  equipos: Equipo[];
  title: string;
  equipo: Equipo;
  isSuccess = false;
  successMsg: string;
  isError = false;
  errorMsg: string;
  errors: any;
  ligas: Liga[];
  constructor(
    private route: ActivatedRoute,
    private equipoService: EquipoService,
    private ligaService: LigaService
  ) {}

  ngOnInit() {
    this.equipo = new Equipo();
    this.equipo.ligaId = '';
    this.equipoId = +this.route.snapshot.paramMap.get('id');
    this.getLigas();
    if (this.equipoId !== 0) {
      this.getEquipo(this.equipoId);
    } else {
      this.title = 'Nuevo Equipo';
    }
  }

  getEquipo(id: number) {
    this.equipoService.getEquipo(id).subscribe(res => {
      this.equipo = res;
      this.title = this.equipo.nombre;
    }, error => {
      this.errorMsg = error;
      this.errors = error;
      this.isError = true;
    });
  }
  saveEquipo() {
    console.log('Saving Equipo');
    if (this.equipoId) {
      this.equipoService.updateEquipo(this.equipoId, this.equipo).subscribe(
        res => {
          this.successMsg = 'Equipo a sido editado exitosamente';
          this.isSuccess = true;
          this.equipo = new Equipo();
          this.equipo.ligaId = '';
        },
        error => {
          this.errorMsg = error;
          this.errors = error;
          this.isError = true;
        }
      );
    } else {
      this.equipoService.createEquipo(this.equipo).subscribe(
        res => {
          this.successMsg = 'Equipo a sido guardado exitosamente';
          this.isSuccess = true;
          this.equipo = new Equipo();
          this.equipo.ligaId = '';
        },
        error => {
          this.errorMsg = error;
          this.errors = error;
          this.isError = true;
        }
      );
    }
  }
  getLigas() {
    this.ligaService.getligas().subscribe(res => {
      this.ligas = res;
    });
  }
  deleteEquipo() {
    if (this.equipo.id) {
      this.equipoService.deleteEquipo(this.equipo.id).subscribe(
        res => {
          if (res.status === 'BadRequest') {
            this.isError = true;
            this.errorMsg = res.message;
            this.errors = res.message;
          } else {
            this.isSuccess = true;
            this.successMsg = res.message;
            this.equipo = new Equipo();
            this.equipo.ligaId = '';
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
}
