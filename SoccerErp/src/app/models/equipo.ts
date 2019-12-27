import { Liga } from './liga';
import { Jugador } from './jugador';

export class Equipo {
    id?: any;
    nombre: string;
    capitan: string;
    telefonoContacto?: string;
    comentarios?: string;
    ligaId?: any;
    liga?: Liga;
    jugadores?: Jugador[];
    golesFavor?: number;
    golesContra?: number;
}
