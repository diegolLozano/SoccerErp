import { Liga } from './liga';
import { Partido } from './partido';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class Jornada {
    id?: any;
    descripcion?: string;
    fechaInicio?: NgbDateStruct;
    fechaFinal?: NgbDateStruct;
    liga?: Liga;
    partidos?: Partido[];
}
