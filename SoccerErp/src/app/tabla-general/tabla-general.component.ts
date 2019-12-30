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
        id : 1,
        equipo: 'Juventus',
        juegosJugados: 18,
        juegosGanados: 16,
        juegosEmpatados: 1,
        juegosPerdidos: 1,
        golesAFavor: 100,
        golesEnContra: 20,
        diferenciaGoles: 80,
        extra: 0,
        puntos: 49
      },
      {
        id : 2,
        equipo: 'Barcelona',
        juegosJugados: 18,
        juegosGanados: 15,
        juegosEmpatados: 2,
        juegosPerdidos: 1,
        golesAFavor: 100,
        golesEnContra: 20,
        diferenciaGoles: 80,
        extra: 0,
        puntos: 46
      },
      {
        id : 3,
        equipo: 'Real Madrid',
        juegosJugados: 18,
        juegosGanados: 14,
        juegosEmpatados: 3,
        juegosPerdidos: 1,
        golesAFavor: 100,
        golesEnContra: 20,
        diferenciaGoles: 80,
        extra: 0,
        puntos: 44
      },
      {
        id : 4,
        equipo: 'Manchester United',
        juegosJugados: 18,
        juegosGanados: 13,
        juegosEmpatados: 4,
        juegosPerdidos: 1,
        golesAFavor: 100,
        golesEnContra: 20,
        diferenciaGoles: 80,
        extra: 0,
        puntos: 42
      },
      {
        id : 5,
        equipo: 'Bayern Munich',
        juegosJugados: 18,
        juegosGanados: 12,
        juegosEmpatados: 5,
        juegosPerdidos: 1,
        golesAFavor: 100,
        golesEnContra: 20,
        diferenciaGoles: 80,
        extra: 0,
        puntos: 40
      },
      {
        id : 6,
        equipo: 'Manchester City',
        juegosJugados: 18,
        juegosGanados: 11,
        juegosEmpatados: 6,
        juegosPerdidos: 1,
        golesAFavor: 100,
        golesEnContra: 20,
        diferenciaGoles: 80,
        extra: 0,
        puntos: 38
      },
      {
        id : 7,
        equipo: 'Porto',
        juegosJugados: 18,
        juegosGanados: 10,
        juegosEmpatados: 7,
        juegosPerdidos: 1,
        golesAFavor: 100,
        golesEnContra: 20,
        diferenciaGoles: 80,
        extra: 0,
        puntos: 37
      },
      {
        id : 8,
        equipo: 'PSG',
        juegosJugados: 18,
        juegosGanados: 9,
        juegosEmpatados: 8,
        juegosPerdidos: 1,
        golesAFavor: 100,
        golesEnContra: 20,
        diferenciaGoles: 80,
        extra: 0,
        puntos: 36
      },
      {
        id : 9,
        equipo: 'PSV',
        juegosJugados: 18,
        juegosGanados: 8,
        juegosEmpatados: 9,
        juegosPerdidos: 1,
        golesAFavor: 100,
        golesEnContra: 20,
        diferenciaGoles: 80,
        extra: 0,
        puntos: 35
      },
      {
        id : 10,
        equipo: 'Boca Juniors',
        juegosJugados: 18,
        juegosGanados: 7,
        juegosEmpatados: 9,
        juegosPerdidos: 2,
        golesAFavor: 100,
        golesEnContra: 20,
        diferenciaGoles: 80,
        extra: 0,
        puntos: 30
      },
      {
        id : 11,
        equipo: 'Tigres',
        juegosJugados: 18,
        juegosGanados: 6,
        juegosEmpatados: 7,
        juegosPerdidos: 5,
        golesAFavor: 100,
        golesEnContra: 20,
        diferenciaGoles: 80,
        extra: 0,
        puntos: 25
      },
      {
        id : 12,
        equipo: 'Wolves',
        juegosJugados: 18,
        juegosGanados: 6,
        juegosEmpatados: 6,
        juegosPerdidos: 6,
        golesAFavor: 100,
        golesEnContra: 20,
        diferenciaGoles: 80,
        extra: 0,
        puntos: 24
      },
      {
        id : 13,
        equipo: 'Chivas',
        juegosJugados: 18,
        juegosGanados: 5,
        juegosEmpatados: 8,
        juegosPerdidos: 5,
        golesAFavor: 100,
        golesEnContra: 20,
        diferenciaGoles: 80,
        extra: 0,
        puntos: 23
      },
      {
        id : 14,
        equipo: 'Galaxy',
        juegosJugados: 18,
        juegosGanados: 4,
        juegosEmpatados: 5,
        juegosPerdidos: 9,
        golesAFavor: 100,
        golesEnContra: 20,
        diferenciaGoles: 80,
        extra: 0,
        puntos: 17
      },
      {
        id : 15,
        equipo: 'Toluca',
        juegosJugados: 18,
        juegosGanados: 4,
        juegosEmpatados: 4,
        juegosPerdidos: 10,
        golesAFavor: 100,
        golesEnContra: 20,
        diferenciaGoles: 80,
        extra: 0,
        puntos: 16
      },
      {
        id : 16,
        equipo: 'Atletico de Madrid',
        juegosJugados: 18,
        juegosGanados: 3,
        juegosEmpatados: 4,
        juegosPerdidos: 11,
        golesAFavor: 100,
        golesEnContra: 20,
        diferenciaGoles: 80,
        extra: 0,
        puntos: 13
      },
      {
        id : 17,
        equipo: 'Santos',
        juegosJugados: 18,
        juegosGanados: 3,
        juegosEmpatados: 3,
        juegosPerdidos: 12,
        golesAFavor: 100,
        golesEnContra: 20,
        diferenciaGoles: 80,
        extra: 0,
        puntos: 12
      },
      {
        id : 18,
        equipo: 'Veracruz',
        juegosJugados: 18,
        juegosGanados: 1,
        juegosEmpatados: 3,
        juegosPerdidos: 1,
        golesAFavor: 100,
        golesEnContra: 20,
        diferenciaGoles: 80,
        extra: 0,
        puntos: 6
      }
    ];
  }

}
