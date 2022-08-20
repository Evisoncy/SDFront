import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { FichaService } from 'src/app/services/ficha.service';
import { UsuarioService } from 'src/app/services/usuario.service';


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
    console.log(idFicha)

          this._usuarioService.obtenerFicha(idFicha).subscribe((res)=>{
            console.log(res)
            this.fichaMedica.push(res)
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

  
  
}
