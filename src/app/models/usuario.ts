export class Usuario {
    _id?: number;
    nombres: string;
    apellidos: string;
    codigo: string;
    correo: string;
    telefono: number

    constructor(nombres: string, apellidos: string, codigo: string, correo: string, telefono:number ){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.codigo = codigo;
        this.correo = correo;
        this.telefono = telefono;
    }
}