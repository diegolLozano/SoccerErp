import { Component, OnInit } from '@angular/core';
import { Liga } from '../models/liga';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LigaService } from '../services/liga.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.scss']
})
export class LigaComponent implements OnInit {
  ligas: Liga[];

  constructor(
    private route: ActivatedRoute,
    private ligaService: LigaService,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getLigas();
  }
  getLigas() {
    this.ligaService.getligas().subscribe(res => {
      this.ligas = res;
    }, error => {
      console.log(error);
    });
  }
  isUserAuthenticated() {
    const token: string = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }
}
