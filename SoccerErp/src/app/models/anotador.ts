import { Jugador } from './jugador';

export class Anotador {
    id?: number;
    equipoGanador: boolean;
    numeroDeGoles?: number;
    comentarios?: string;
    jugador?: Jugador;
}
