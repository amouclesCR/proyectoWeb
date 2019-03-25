export interface User {
    idUser: number; // identificador
    userName: string; // nombre
    password: string; // contraseña
    email: string; // correo
    Descripacion: string; // descripcion
    iconno: string; // icono
    date: Date; // fecha nacimineto
    tipo: string; // tipo
}

export interface EditorxSitio {
    id: number;
    idUser: number;
    siteId: number;

}