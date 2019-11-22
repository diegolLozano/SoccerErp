import { Equipo } from './equipo';
import { Anotador } from './anotador';
import { Amonestado } from './amonestado';
import { Expulsado } from './expulsado';
import { Jornada } from './jornada';

export class Partido {
    Id?: number;
    Equipo1Nombre?: string;
    Equipo2Nombre?: string;
    Equipo1?: Equipo;
    Equipo2?: Equipo;
    Empate?: boolean;
    GolesEquipo1?: number;
    GolesEquipo2?: number;
    Anotadores?: Anotador[];
    Amonestados?: Amonestado[];
    Expulsados?: Expulsado[];
    Jornada?: Jornada;
}

