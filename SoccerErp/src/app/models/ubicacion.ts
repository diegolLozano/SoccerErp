import { Liga } from './liga';

export class Ubicacion {
    Id?: number;
    Nombre?: string;
    Calle?: string;
    Numero?: string;
    NumeroInterior?: string;
    Colonia?: string;
    Administrador?: string;
    Telefono?: string;
    Ligas?: Liga[];
}
