export class Usuario {
    _id?: number;
    nombres: string;
    apellidos: string;
    codigo: string;
    correo: string;
    telefono: number;
    rol: string;
    dni: string;
    sexo: string

    constructor(nombres: string, apellidos: string, codigo: string, correo: string, telefono:number,rol:string,dni:string,sexo:string ){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.codigo = codigo;
        this.correo = correo;
        this.telefono = telefono;
        this.rol=rol;
        this.dni=dni;
        this.sexo =sexo;
    }
}