import { Ubicacion } from './ubicacion';
import { Equipo } from './equipo';

export class Liga {
    Id?: number;
    Nombre?: string;
    Costo?: string;
    DiasDeSemana?: string;
    Ubicacion?: Ubicacion;
    Equipos?: Equipo[];
}
