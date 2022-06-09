import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  titulo = 'Crear Usuario';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _usuarioService: UsuarioService,
              private aRouter: ActivatedRoute) { 
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
    this.esEditar();
  }

  agregarUsuario() {

    const PRODUCTO: Usuario = {
      nombres: this.usuarioForm.get('usuario')?.value,
      apellidos: this.usuarioForm.get('apellidos')?.value,
      codigo: this.usuarioForm.get('codigo')?.value,
      correo: this.usuarioForm.get('correo')?.value,
      telefono:this.usuarioForm.get('telefono')?.value
    }

    console.log(PRODUCTO);
    this._usuarioService.guardarUsuario(PRODUCTO).subscribe(data => {
      this.toastr.success('El Usuario fue registrado con exito!', 'Usuario Registrado!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.usuarioForm.reset();
    })

  
  }

  esEditar() {

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
  }

}
