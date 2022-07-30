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
  idFicha!: string
  fichaForm:FormGroup;
  usuarioForm:FormGroup
  usuarios:Usuario[]=[];
  datos!:string
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
  
    /*if(this.id !== null) {
      this.s.obtenerUsuario(this.id).subscribe(data=>{
        console.log(data.fichaMedica[0])
        this.fichaForm.patchValue({ fichaMedica:data.fichaMedica[0] });
        this.nombre=data.nombres
        this.Apellidos=data.apellidos
        this.idFicha=data.fichaMedica[0]
        })
      }*/
    const idFicha=this.aRouter.snapshot.params['id'];
    console.log(idFicha)
    this.s.obtenerUsuario(idFicha).subscribe(data => {
      console.log(data.fichaMedica[0])
      this.nombre=data.nombres
        this.Apellidos=data.apellidos
      this._usuarioService.obtenerFicha(data.fichaMedica[0]).subscribe(res=>{
        console.log(res)
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
    })

      
    }
  
}
