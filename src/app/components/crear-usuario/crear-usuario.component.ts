import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rol } from 'src/app/models/rol';
import { Usuario } from 'src/app/models/usuario';
import { RolService } from 'src/app/services/rol.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  listRols: Rol[]=[];
  listS=[{'nombre':'Masculino'},{'nombre':'Femenino'} ]
  titulo = 'Crear Usuario';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _usuarioService: UsuarioService,
              private service: RolService,
              private aRouter: ActivatedRoute) { 
    this.usuarioForm = this.fb.group({
      usuario: ['', Validators.required],
      apellidos: ['', Validators.required],
      codigo: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['',Validators.required],
      rol:['', Validators.required],
      dni:['', Validators.required],
      sexo:['',Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
    this.obtenerRoles()
  }

  agregarUsuario() {

    const PRODUCTO: Usuario = {
      nombres: this.usuarioForm.get('usuario')?.value,
      apellidos: this.usuarioForm.get('apellidos')?.value,
      codigo: this.usuarioForm.get('codigo')?.value,
      correo: this.usuarioForm.get('correo')?.value,
      telefono:this.usuarioForm.get('telefono')?.value,
      rol: this.usuarioForm.get('rol')?.value,
      dni: this.usuarioForm.get('dni')?.value,
      sexo:this.usuarioForm.get('sexo')?.value

    }

    console.log(PRODUCTO);
    this._usuarioService.guardarUsuario(PRODUCTO).subscribe(data => {
      this.toastr.success('El Usuario fue registrado con exito!', 'Usuario Registrado!');
      this.router.navigate(['/usuarios']);
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
          telefono: data.telefono,
          rol: data.rol
        }) 
      })
    }
  }
  obtenerRoles(){
    this.service.obtenerRoles().subscribe(data=>{
      console.log(data)
      this.listRols = data;
    }, error => {
      console.log(error);
    
    })
    console.log(this.listRols)
  }
}
