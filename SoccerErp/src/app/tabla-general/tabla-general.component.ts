import { Component, OnInit } from '@angular/core';
import { TablaGeneral } from '../models/tabla-general';

@Component({
  selector: 'app-tabla-general',
  templateUrl: './tabla-general.component.html',
  styleUrls: ['./tabla-general.component.scss']
})
export class TablaGeneralComponent implements OnInit {

  tablaGeneral: TablaGeneral[];
  constructor() { }

  ngOnInit() {
    this.tablaGeneral = [
      {
        Id : 1,
        Equipo: 'Juventus',
        JuegosJugados: 18,
        JuegosGanados: 16,
        JuegosEmpatados: 1,
        JuegosPerdidos: 1,
        GolesAFavor: 100,
        GolesEnContra: 20,
        DiferenciaGoles: 80,
        Extra: 0,
        Puntos: 49
      },
      {
        Id : 2,
        Equipo: 'Barcelona',
        JuegosJugados: 18,
        JuegosGanados: 15,
        JuegosEmpatados: 2,
        JuegosPerdidos: 1,
        GolesAFavor: 100,
        GolesEnContra: 20,
        DiferenciaGoles: 80,
        Extra: 0,
        Puntos: 46
      },
      {
        Id : 3,
        Equipo: 'Real Madrid',
        JuegosJugados: 18,
        JuegosGanados: 14,
        JuegosEmpatados: 3,
        JuegosPerdidos: 1,
        GolesAFavor: 100,
        GolesEnContra: 20,
        DiferenciaGoles: 80,
        Extra: 0,
        Puntos: 44
      },
      {
        Id : 4,
        Equipo: 'Manchester United',
        JuegosJugados: 18,
        JuegosGanados: 13,
        JuegosEmpatados: 4,
        JuegosPerdidos: 1,
        GolesAFavor: 100,
        GolesEnContra: 20,
        DiferenciaGoles: 80,
        Extra: 0,
        Puntos: 42
      },
      {
        Id : 5,
        Equipo: 'Bayern Munich',
        JuegosJugados: 18,
        JuegosGanados: 12,
        JuegosEmpatados: 5,
        JuegosPerdidos: 1,
        GolesAFavor: 100,
        GolesEnContra: 20,
        DiferenciaGoles: 80,
        Extra: 0,
        Puntos: 40
      },
      {
        Id : 6,
        Equipo: 'Manchester City',
        JuegosJugados: 18,
        JuegosGanados: 11,
        JuegosEmpatados: 6,
        JuegosPerdidos: 1,
        GolesAFavor: 100,
        GolesEnContra: 20,
        DiferenciaGoles: 80,
        Extra: 0,
        Puntos: 38
      },
      {
        Id : 7,
        Equipo: 'Porto',
        JuegosJugados: 18,
        JuegosGanados: 10,
        JuegosEmpatados: 7,
        JuegosPerdidos: 1,
        GolesAFavor: 100,
        GolesEnContra: 20,
        DiferenciaGoles: 80,
        Extra: 0,
        Puntos: 37
      },
      {
        Id : 8,
        Equipo: 'PSG',
        JuegosJugados: 18,
        JuegosGanados: 9,
        JuegosEmpatados: 8,
        JuegosPerdidos: 1,
        GolesAFavor: 100,
        GolesEnContra: 20,
        DiferenciaGoles: 80,
        Extra: 0,
        Puntos: 36
      },
      {
        Id : 9,
        Equipo: 'PSV',
        JuegosJugados: 18,
        JuegosGanados: 8,
        JuegosEmpatados: 9,
        JuegosPerdidos: 1,
        GolesAFavor: 100,
        GolesEnContra: 20,
        DiferenciaGoles: 80,
        Extra: 0,
        Puntos: 35
      },
      {
        Id : 10,
        Equipo: 'Boca Juniors',
        JuegosJugados: 18,
        JuegosGanados: 7,
        JuegosEmpatados: 9,
        JuegosPerdidos: 2,
        GolesAFavor: 100,
        GolesEnContra: 20,
        DiferenciaGoles: 80,
        Extra: 0,
        Puntos: 30
      },
      {
        Id : 11,
        Equipo: 'Tigres',
        JuegosJugados: 18,
        JuegosGanados: 6,
        JuegosEmpatados: 7,
        JuegosPerdidos: 5,
        GolesAFavor: 100,
        GolesEnContra: 20,
        DiferenciaGoles: 80,
        Extra: 0,
        Puntos: 25
      },
      {
        Id : 12,
        Equipo: 'Wolves',
        JuegosJugados: 18,
        JuegosGanados: 6,
        JuegosEmpatados: 6,
        JuegosPerdidos: 6,
        GolesAFavor: 100,
        GolesEnContra: 20,
        DiferenciaGoles: 80,
        Extra: 0,
        Puntos: 24
      },
      {
        Id : 13,
        Equipo: 'Chivas',
        JuegosJugados: 18,
        JuegosGanados: 5,
        JuegosEmpatados: 8,
        JuegosPerdidos: 5,
        GolesAFavor: 100,
        GolesEnContra: 20,
        DiferenciaGoles: 80,
        Extra: 0,
        Puntos: 23
      },
      {
        Id : 14,
        Equipo: 'Galaxy',
        JuegosJugados: 18,
        JuegosGanados: 4,
        JuegosEmpatados: 5,
        JuegosPerdidos: 9,
        GolesAFavor: 100,
        GolesEnContra: 20,
        DiferenciaGoles: 80,
        Extra: 0,
        Puntos: 17
      },
      {
        Id : 15,
        Equipo: 'Toluca',
        JuegosJugados: 18,
        JuegosGanados: 4,
        JuegosEmpatados: 4,
        JuegosPerdidos: 10,
        GolesAFavor: 100,
        GolesEnContra: 20,
        DiferenciaGoles: 80,
        Extra: 0,
        Puntos: 16
      },
      {
        Id : 16,
        Equipo: 'Atletico de Madrid',
        JuegosJugados: 18,
        JuegosGanados: 3,
        JuegosEmpatados: 4,
        JuegosPerdidos: 11,
        GolesAFavor: 100,
        GolesEnContra: 20,
        DiferenciaGoles: 80,
        Extra: 0,
        Puntos: 13
      },
      {
        Id : 17,
        Equipo: 'Santos',
        JuegosJugados: 18,
        JuegosGanados: 3,
        JuegosEmpatados: 3,
        JuegosPerdidos: 12,
        GolesAFavor: 100,
        GolesEnContra: 20,
        DiferenciaGoles: 80,
        Extra: 0,
        Puntos: 12
      },
      {
        Id : 18,
        Equipo: 'Veracruz',
        JuegosJugados: 18,
        JuegosGanados: 1,
        JuegosEmpatados: 3,
        JuegosPerdidos: 1,
        GolesAFavor: 100,
        GolesEnContra: 20,
        DiferenciaGoles: 80,
        Extra: 0,
        Puntos: 6
      }
    ];
  }

}
