import { Equipo } from './equipo';

export class Jugador {
    id?: number;
    nombre?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    edad?: number;
    numero?: number;
    suspendido?: boolean;
    posicion?: string;
    equipo?: Equipo;
    equipoId?: any;
    isCapitan?: boolean;
}
