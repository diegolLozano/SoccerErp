import { Liga } from './liga';
import { Partido } from './partido';

export class Jornada {
    Id?: number;
    Descripcion?: string;
    FechaInicio?: Date;
    FechaFinal?: Date;
    Liga?: Liga;
    Partidos?: Partido[];
}
