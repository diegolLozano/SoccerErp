import { Equipo } from './equipo';
import { Anotador } from './anotador';
import { Amonestado } from './amonestado';
import { Expulsado } from './expulsado';

export class Partido {
    Id?: number;
    Equipo1?: string;
    Equipo2?: string;
    EquipoGanador?: Equipo;
    EquipoPerdedor?: Equipo;
    Empate?: boolean;
    GolesEquipo1?: number;
    GolesEquipo2?: number;
    Anotadores?: Anotador[];
    Amonestados?: Amonestado[];
    Expulsados?: Expulsado[];
    Fecha?: Date;
}

