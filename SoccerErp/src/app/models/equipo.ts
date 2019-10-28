import { Liga } from './liga';
import { Jugador } from './jugador';

export class Equipo {
    Id?: number;
    Nombre: string;
    Capitan: string;
    TelefonoContacto?: string;
    Comentarios?: string;
    Liga?: Liga;
    Jugadores?: Jugador[];
}
