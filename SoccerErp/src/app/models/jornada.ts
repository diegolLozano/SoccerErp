import { Liga } from './liga';
import { Partido } from './partido';
import { NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';

export class Jornada {
    id?: any;
    descripcion?: string;
    fechaInicio?: Date;
    fechaFinal?: Date;
    fechaInicioStrc?: NgbDate;
    fechaFinalStrc?: NgbDate;
    ligaId?: any;
    liga?: Liga;
    partidos?: Partido[];
}
