import { Equipo } from './equipo';
import { Anotador } from './anotador';
import { Amonestado } from './amonestado';
import { Expulsado } from './expulsado';
import { Jornada } from './jornada';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Jugador } from './jugador';

export class Partido {
    id?: number;
    equipo1Nombre?: string;
    equipo2Nombre?: string;
    equipo1Id?: any;
    equipo1?: Equipo;
    equipo2Id?: any;
    equipo2?: Equipo;
    empate?: boolean;
    golesEquipo1?: number;
    golesEquipo2?: number;
    anotadores?: Anotador[];
    amonestados?: Amonestado[];
    expulsados?: Expulsado[];
    jornada?: Jornada;
    jornadaId?: any;
    pendiente?: boolean;
    jugado?: boolean;
    fechaJuego?: Date;
    horaJuego?: string;
    fechaJuegoStrc?: NgbDate;
    jugadores?: Jugador[];
    ganador?: Equipo;
    ganadorId?: number;
    isGanador1?: boolean;
    isGanador2?: boolean;
}

