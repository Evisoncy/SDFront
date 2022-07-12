export class Ficha {
    _id?: string;
    diagnostico: string;
    tipoSangre: string;
    medicamentoHabitual: string;
    medicamentoAlergico: string;
    seguroMedico: string;
    anio:number;


    constructor(diagnostico: string, tipoSangre: string, medicamentoHabitual: string, medicamentoAlergico: string, seguroMedico:string, anio:number){
        this.diagnostico = diagnostico;
        this.tipoSangre = tipoSangre;
        this.medicamentoHabitual = medicamentoHabitual;
        this.medicamentoAlergico = medicamentoAlergico;
        this.seguroMedico = seguroMedico;
        this.anio = anio;
    }
}