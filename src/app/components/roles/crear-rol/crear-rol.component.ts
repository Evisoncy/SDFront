import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rol } from 'src/app/models/rol';
import { RolService } from 'src/app/services/rol.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-rol',
  templateUrl: './crear-rol.component.html',
  styleUrls: ['./crear-rol.component.css']
})
export class CrearRolComponent implements OnInit {

  rolForm!: FormGroup;
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _usuarioService: RolService,
              private aRouter: ActivatedRoute) { 
    this.rolForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
      
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    //this.esEditar();
  }

  agregarRol() {

    const PRODUCTO: Rol = {
      nombre: this.rolForm.get('nombre')?.value,
      descripcion: this.rolForm.get('descripcion')?.value,
      
    }

    console.log(PRODUCTO);
    this._usuarioService.guardarRol(PRODUCTO).subscribe(data => {
      this.toastr.success('El Rol fue registrado con exito!', 'Rol Registrado!');
      this.router.navigate(['/roles']);
    }, error => {
      console.log(error);
      this.rolForm.reset();
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
