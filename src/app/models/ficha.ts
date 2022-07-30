export class Ficha {
    _id?: string;
    diagnostico: string;
    tipoSangre: string;
    medicamentoHabitual: string;
    medicamentoAlergico: string;
    seguroMedico: string;
    anio:number;
    discapacidad: string;
    correo:string;
   
    


    constructor(diagnostico: string, tipoSangre: string, medicamentoHabitual: string, medicamentoAlergico: string, seguroMedico:string, anio:number,email:string, discapacidad:string, correo:string){
        this.diagnostico = diagnostico;
        this.tipoSangre = tipoSangre;
        this.medicamentoHabitual = medicamentoHabitual;
        this.medicamentoAlergico = medicamentoAlergico;
        this.seguroMedico = seguroMedico;
        this.anio = anio;
        this.discapacidad = discapacidad;
        this.correo = correo;
        
    }
}