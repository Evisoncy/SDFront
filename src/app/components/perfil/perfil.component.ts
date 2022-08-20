import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { FichaService } from 'src/app/services/ficha.service';
import { IncidenciaService } from 'src/app/services/incidencia';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  Apellidos!:String
  nombre!:string
  nombres!:string
  dni!:string
  codigo!:string
  sexo!:string
  email!:String
  telefono!:String
  rol!:string
  idFicha!: string
  fichaForm:FormGroup;
  usuarioForm:FormGroup
  usuarios:Usuario[]=[];
  datos!:string
  id!: string | null;
  idF!: string | null;
  fichas!:any
  incidencias!:any
  fichaMedica  :any[]=[]
  idUser!:any
  inci!:any
  incidencia:any[]=[]
  constructor(private _usuarioService:FichaService,private user:UsuarioService,private inc:IncidenciaService, private fb: FormBuilder, private aRouter:ActivatedRoute) {
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
    fichaMedica: [''],
    rol:[''],
    dni:[''],
    sexo:['']
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
    this.user.obtenerUsuario(idFicha).subscribe(data => {
      console.log(data)
    
      console.log(data.fichaMedica[0])
      this.nombre=data.nombres
      this.Apellidos=data.apellidos
      this.codigo=data.codigo
      this.dni=data.dni
      this.email=data.correo
      this.telefono=data.telefono
      this.sexo=data.sexo
      this.rol=data.rol
      this.idUser=data._id
      this.nombres= this.nombre + " " +this.Apellidos; 
      this.fichas=data.fichaMedica
      this.inci=data.incidencia
      console.log(this.fichas)
      console.log(this.inci)
      
      for (let i = 0; i < this.fichas.length; i++) {
        this._usuarioService.obtenerFicha(this.fichas[i]).subscribe((res)=>{
          console.log(res)
          this.fichaMedica
          .push(res)
        }) 
        
      }
      for (let i = 0; i < this.inci.length; i++) {
        this.inc.obtenerIncidencia(this.inci[i]).subscribe(data=>{
          console.log(data)
          this.incidencia.push(data)
        })
      }
      console.log(this.fichaMedica)
      console.log(this.incidencia)
    })
  }


 
}
