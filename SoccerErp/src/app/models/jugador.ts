import { Equipo } from './equipo';

export class Jugador {
    Id?: number;
    Nombre?: string;
    ApellidoPaterno?: string;
    ApellidoMaterno?: string;
    Edad?: number;
    Numero?: number;
    Suspendido?: boolean;
    Posicion?: string;
    Equipo?: Equipo;
}
