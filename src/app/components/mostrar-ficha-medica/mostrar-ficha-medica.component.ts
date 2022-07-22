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
  Apellidos!:String
  nombre!:string
  fichaForm:FormGroup;
  usuarioForm:FormGroup
  usuarios:Usuario[]=[];
  datos!:string
  id!: string | null;
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
    telefono: ['',Validators.required]
  })
  this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    
    if(this.id !== null) {
    this.s.obtenerUsuario(this.id).subscribe(data=>{
      console.log(data.nombres)
      this.nombre=data.nombres
      this.Apellidos=data.apellidos
      /*this.usuarioForm.setValue({
        usuario: data.nombres,
        apellidos: data.apellidos,
        codigo: data.codigo,
        correo: data.correo,
        telefono: data.telefono
      }) 
      let datos=data.apellidos+" "+data.nombres
      console.log(datos)*/

      })
    }
    this.obtenerFicha()
  }
  obtenerFicha() {
    let ide='62daed6239aa09368ce9fb46'
    
    console.log(this.id)
    if(this.id !== null) {
      
      this._usuarioService.obtenerFicha(ide).subscribe(data => {
        console.log(data)
        this.fichaForm.setValue({
          diagnostico: data.diagnostico,
          tipoSangre: data.tipoSangre,
          medicamentoHabitual: data.medicamentoHabitual,
          medicamentoAlergico: data.medicamentoAlergico,
          seguroMedico: data.seguroMedico,
          anio: data.anio,
          discapacidad: data.discapacidad,
        }) 
      })
    }
  }
}
