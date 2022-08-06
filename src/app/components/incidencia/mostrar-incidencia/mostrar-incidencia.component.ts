import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { IncidenciaService } from 'src/app/services/incidencia';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mostrar-incidencia',
  templateUrl: './mostrar-incidencia.component.html',
  styleUrls: ['./mostrar-incidencia.component.css']
})
export class MostrarIncidenciaComponent implements OnInit {

  Apellidos!:String
  nombre!:string
  idFicha!: string
  incidenciaForm:FormGroup;
  usuarioForm:FormGroup
  usuarios:Usuario[]=[];
  datos!:string
  id!: string | null;
  idF!: string | null;
  constructor(private _usuarioService:IncidenciaService,private s:UsuarioService, private fb: FormBuilder, private aRouter:ActivatedRoute) {
    this.incidenciaForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      lugar: ['', Validators.required],
      
  })
  this.usuarioForm = this.fb.group({
    usuario: ['', Validators.required],
    apellidos: ['', Validators.required],
    codigo: ['', Validators.required],
    correo: ['', Validators.required],
    telefono: ['',Validators.required],
    fichaMedica: [''],
    incidencia: ['']
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
    const idIncidencia=this.aRouter.snapshot.params['id'];
    console.log(idIncidencia)
    this.s.obtenerUsuario(idIncidencia).subscribe(data => {
      console.log(data.incidencia[0])
      this.nombre=data.nombres
        this.Apellidos=data.apellidos
      this._usuarioService.obtenerIncidencia(data.incidencia[0]).subscribe(res=>{
        console.log(res)
        this.incidenciaForm.setValue({
          titulo: res.titulo,
          descripcion: res.descripcion,
          fecha: res.fecha,
          lugar: res.lugar,
          
        })
       })
    })

      
    }
  
}
