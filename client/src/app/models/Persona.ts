import { Title } from '@angular/platform-browser';

export interface Persona {
    id?: number,
    nombres?: string,
    apellidos?: string,
    idtipodocumento?: number,
    documento?: number,
    lugarresidencia?: string,
    fechanacimiento?: Date,
    email?: string,
    telefono?: number,
    usuario?: string,
    contrasena?: string,
    created_at?: Date
};