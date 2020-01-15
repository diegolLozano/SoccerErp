import { Equipo } from './equipo';

export class TablaGeneral {
    id?: number;
    equipo?: Equipo;
    equipoId?: any;
    juegosJugados?: number;
    juegosGanados?: number;
    juegosEmpatados?: number;
    juegosPerdidos?: number;
    golesAFavor?: number;
    golesEnContra?: number;
    diferenciaGoles?: number;
    puntos?: number;
    extra?: number;
}
