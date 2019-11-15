import { Ubicacion } from './ubicacion';
import { Equipo } from './equipo';

export class Liga {
    Id?: any;
    Nombre?: string;
    Costo?: string;
    DiasDeSemana?: string;
    Ubicacion?: Ubicacion;
    Equipos?: Equipo[];
}
