import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Liga } from 'src/app/models/liga';
import { LigaService } from 'src/app/services/liga.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-liga-forma',
  templateUrl: './liga-forma.component.html',
  styleUrls: ['./liga-forma.component.scss']
})
export class LigaFormaComponent implements OnInit {
  sub: any;
  id: number;
  ligas: Liga[];
  liga: Liga = new Liga();
  title: string;
  errors: any;
  isSuccess = false;
  successMsg: string;
  isError = false;
  errorMsg: string;
  constructor(
    private route: ActivatedRoute,
    private ligaService: LigaService
  ) {}

  ngOnInit() {
    this.ligas = [];
    this.id = +this.route.snapshot.paramMap.get('id');

    if (this.id !== 0) {
      this.getLiga(this.id);
    } else {
      this.title = 'Nueva Liga';
    }
  }
  getLiga(id: number) {
    this.ligaService.getLiga(id).subscribe(res => {
      this.liga = res;
      this.title = this.liga.nombre;
    });
  }
  saveLiga(form: NgForm) {
    this.isSuccess = false;
    this.isError = false;
    if (this.liga.id) {
      this.ligaService.updateLiga(this.liga.id, this.liga).subscribe(
        res => {
          this.successMsg = 'Liga a sido editada exitosamente';
          this.isSuccess = true;
          this.liga = new Liga();
        }, error => {
          this.errorMsg = error;
          this.errors = error;
          this.isError = true;
        }
      );
    } else {
      this.ligaService.createLiga(this.liga).subscribe(
        res => {
          this.successMsg = 'Liga a sido guardada exitosamente';
          this.isSuccess = true;
          this.liga = {};
        }, error => {
          this.errorMsg = error;
          this.errors = error;
          this.isError = true;
        }
      );
    }
  }
  deleteLiga() {
    if (this.liga.id) {
      this.ligaService.deleteLiga(this.liga.id).subscribe(
        res => {
          this.successMsg = 'Liga a sido borrada exitosamente';
          this.isSuccess = true;
          this.liga = new Liga();
        },
        error => {
          this.errors = error;
          this.isError = true;
        }
      );
    }
  }
}
