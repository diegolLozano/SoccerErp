import { Liga } from './liga';
import { Partido } from './partido';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class Jornada {
    Id?: any;
    Descripcion?: string;
    FechaInicio?: NgbDateStruct;
    FechaFinal?: NgbDateStruct;
    Liga?: Liga;
    Partidos?: Partido[];
}
