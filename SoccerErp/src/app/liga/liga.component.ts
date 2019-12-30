import { Component, OnInit } from '@angular/core';
import { Liga } from '../models/liga';
import { ActivatedRoute } from '@angular/router';
import { LigaService } from '../services/liga.service';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.scss']
})
export class LigaComponent implements OnInit {
  ligas: Liga[];

  constructor(
    private route: ActivatedRoute,
    private ligaService: LigaService
  ) {}

  ngOnInit() {
    this.getLigas();
  }
  getLigas() {
    this.ligaService.getligas().subscribe(res => {
      this.ligas = res;
    });
  }
}
