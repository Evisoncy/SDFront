import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { FichaService } from 'src/app/services/ficha.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-mostrar-ficha-medica',
  templateUrl: './mostrar-ficha-medica.component.html',
  styleUrls: ['./mostrar-ficha-medica.component.css']
})
export class MostrarFichaMedicaComponent implements OnInit {
  title=['Tipo de Sangre','Medicamento habitual','Medicamento alergico','Seguro medico','Diagnostico','Año','Discapacidad']
  Apellidos!:String
  nombre!:string
  idFicha!: string
  fichaForm:FormGroup;
  usuarioForm:FormGroup
  usuarios:Usuario[]=[];
  datos!:string
  fichas!:any
  fichaMedica:any[]=[]
  id!: string | null;
  idF!: string | null;
  constructor(private _usuarioService:FichaService,private s:UsuarioService, private fb: FormBuilder, private aRouter:ActivatedRoute) {
    this.fichaForm = this.fb.group({
      diagnostico: ['', Validators.required],
      tipoSangre: ['', Validators.required],
      medicamentoHabitual: ['', Validators.required],
      medicamentoAlergico: ['', Validators.required],
      seguroMedico: ['', Validators.required],
      anio: ['',Validators.required],
      discapacidad:  ['',Validators.required],
  })
  this.usuarioForm = this.fb.group({
    usuario: ['', Validators.required],
    apellidos: ['', Validators.required],
    codigo: ['', Validators.required],
    correo: ['', Validators.required],
    telefono: ['',Validators.required],
    fichaMedica: ['']
  })

 }

  ngOnInit(): void {
    
    
    this.obtenerFicha()
  }
  obtenerFicha() {
    const idFicha=this.aRouter.snapshot.params['id'];
    const name=this.aRouter.snapshot.params['nombres']
    console.log(name)
    console.log(idFicha)

          this._usuarioService.obtenerFicha(idFicha).subscribe((res)=>{
            console.log(res)
            this.fichaMedica=res
            console.log(this.fichaMedica)
            this.fichaForm.setValue({
              diagnostico: res.diagnostico,
              tipoSangre: res.tipoSangre,
              medicamentoHabitual: res.medicamentoHabitual,
              medicamentoAlergico: res.medicamentoAlergico,
              seguroMedico: res.seguroMedico,
              anio: res.anio,
              discapacidad: res.discapacidad,
            })
           
          })
          
  }

  createPdf(){
    const idFicha=this.aRouter.snapshot.params['id'];
    const name=this.aRouter.snapshot.params['nombres']
    console.log(name)
    this._usuarioService.obtenerFicha(idFicha).subscribe((res)=>{
            console.log(res)
              const pdfDefinition:any = {
                
                content: [
                  
                  {text:'FICHA MÉDICA',style: 'header', alignment:'center', fontSize:20, bold:true, decoration:'underline'},
                  {text:'\nNombre del paciente : ' + name,bold:true,margin:[50,3,50,3]},
                  
                  {text:'\n1. Tipo de sangre',bold:true,margin:[50,3,50,3], decoration:'underline'},
                 
                  { 
                    type:'none',
                    ol: [{text: res.tipoSangre,margin:[50,3,50,3]}]
                  },
                  {text:'\n2. Medicamento habitual',bold:true,margin:[50,3,50,3], decoration:'underline'},
                  { 
                    type:'none',
                    ol: [{text: res.medicamentoHabitual,margin:[50,3,50,3]}]
                  },
                  {text:'\n3. Medicamento Alérgico',bold:true,margin:[50,3,50,3], decoration:'underline'},
                  { 
                    type:'none',
                    ol: [{text: res.medicamentoAlergico,margin:[50,3,50,3]}]
                  },
                  {text:'\n4. Seguro médico',bold:true,margin:[50,3,50,3], decoration:'underline'},
                  { 
                    type:'none',
                    ol: [{text: res.seguroMedico,margin:[50,3,50,3]}]
                  },
                  {text:'\n5. Diágnostico',bold:true,margin:[50,3,50,3], decoration:'underline'},
                  { 
                    type:'none',
                    ol: [{text: res.diagnostico,margin:[50,3,50,3]}]
                  },
                  {text:'\n6. Año',bold:true,margin:[50,3,50,3], decoration:'underline'},
                  { 
                    type:'none',
                    ol: [{text: res.anio,margin:[50,3,50,3]}]
                  },
                  {text:'\n7. Discapacidad',bold:true,margin:[50,3,50,3], decoration:'underline'},
                  { 
                    type:'none',
                    ol: [{text: res.discapacidad,margin:[50,3,50,3]}]
                  },

          
                ],
              
              }
              const pdf = pdfMake.createPdf(pdfDefinition);
              pdf.open();

            })
   
  }
  
}
