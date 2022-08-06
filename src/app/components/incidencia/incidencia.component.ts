import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Discapacidad } from 'src/app/models/discapacidad';
import { Incidencia } from 'src/app/models/incidencia';
import { DiscapacidadService } from 'src/app/services/discapacidad';
import { FichaService } from 'src/app/services/ficha.service';
import { IncidenciaService } from 'src/app/services/incidencia';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css']
})
export class IncidenciaComponent implements OnInit {

  incidenciaForm!: FormGroup;
  listFicha : []=[];
  correo: any
  listD:Discapacidad[]=[];
  listS=[{'nombre':'A+'},{'nombre':'A-'},{'nombre':'B+'},{'nombre':'B-'},{'nombre':'AB+'},{'nombre':'AB-'},{'nombre':'O+'},{'nombre':'O-'}];
  listSeguro=[{'nombre':'EPS'},{'nombre':'UNMSM'},{'nombre':'MINSA'},{'nombre':'ESSALUD'}];
  //id!: string | null;
  activatedRoute: any;
  constructor(private d:DiscapacidadService ,private _usuarioService:IncidenciaService,private service:UsuarioService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {

   
  
     
   this.incidenciaForm = this.fb.group({
        titulo: ['', Validators.required],
        descripcion: ['', Validators.required],
        fecha: ['', Validators.required],
        lugar: ['', Validators.required],
        correo: ['']
    })
      const id = this.aRouter.snapshot.paramMap.get('id');
      this.service.obtenerUsuario(id).subscribe(data=>{
      this.incidenciaForm.patchValue({ correo:data.correo });
      
     })
     
     
     
     
   }

  ngOnInit(): void {
   
  }
  
  agregarFicha() {
    
    
      const PRODUCTO: Incidencia = {
      titulo: this.incidenciaForm.get('titulo')?.value,
      descripcion: this.incidenciaForm.get('descripcion')?.value,
      fecha: this.incidenciaForm.get('fecha')?.value,
      lugar: this.incidenciaForm.get('lugar')?.value,
      correo: this.incidenciaForm.get('correo')?.value,
      
    }
     
    console.log(PRODUCTO); 
      
      this._usuarioService.guardarIncidencia(PRODUCTO).subscribe(data => {
        this.toastr.success('La ficha fue registrada con exito!', 'Ficha Registrada');
        this.router.navigate(['/usuarios']);
      }, error => {
        console.log(error);
        this.incidenciaForm.reset();
      })
    
  }
 
}
