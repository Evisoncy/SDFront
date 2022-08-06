export class Incidencia {
    _id?: string;
    titulo: string;
    descripcion: string;
    fecha: Date;
    lugar: string;
    correo: string
  
    


    constructor(titulo: string, descripcion: string, fecha: Date, lugar: string, correo:string,){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.lugar = lugar;
        this.correo = correo;
       
    }
}