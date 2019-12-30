import { Liga } from './liga';

export class Ubicacion {
    id?: number;
    nombre?: string;
    calle?: string;
    numero?: string;
    numeroInterior?: string;
    colonia?: string;
    administrador?: string;
    telefono?: string;
    ligas?: Liga[];
}
