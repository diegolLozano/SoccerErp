import { Equipo } from './equipo';
import { Anotador } from './anotador';
import { Amonestado } from './amonestado';
import { Expulsado } from './expulsado';
import { Jornada } from './jornada';

export class Partido {
    id?: number;
    equipo1Nombre?: string;
    equipo2Nombre?: string;
    equipo1?: Equipo;
    equipo2?: Equipo;
    empate?: boolean;
    golesEquipo1?: number;
    golesEquipo2?: number;
    anotadores?: Anotador[];
    amonestados?: Amonestado[];
    expulsados?: Expulsado[];
    jornada?: Jornada;
    pendiente?: boolean;
    jugado?: boolean;
}

