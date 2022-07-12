import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Discapacidad } from 'src/app/models/discapacidad';
import { DiscapacidadService } from 'src/app/services/discapacidad';


@Component({
  selector: 'app-crear-dis',
  templateUrl: './crear-dis.component.html',
  styleUrls: ['./crear-dis.component.css']
})
export class CrearDisComponent implements OnInit {

  dForm!: FormGroup;
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _usuarioService: DiscapacidadService,
              private aRouter: ActivatedRoute) { 
    this.dForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
      
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    //this.esEditar();
  }

  agregarRol() {

    const PRODUCTO: Discapacidad = {
      nombre: this.dForm.get('nombre')?.value,
      descripcion: this.dForm.get('descripcion')?.value,
      
    }

    console.log(PRODUCTO);
    this._usuarioService.guardarD(PRODUCTO).subscribe(data => {
      this.toastr.success('La discapacidad fue registrada con exito!');
      this.router.navigate(['/discapacidades']);
    }, error => {
      console.log(error);
      this.dForm.reset();
    })

  
  }

  /*esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar usuario';
      this._usuarioService.obtenerUsuario(this.id).subscribe(data => {
        this.usuarioForm.setValue({
          usuario: data.nombres,
          apellidos: data.apellidos,
          codigo: data.codigo,
          correo: data.correo,
          telefono: data.telefono
        }) 
      })
    }
  }*/
}
