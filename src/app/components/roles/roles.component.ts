import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Rol } from 'src/app/models/rol';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  listRols: Rol[] = [];
  constructor(private service: RolService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerRoles()
  }
  obtenerRoles(){
    this.service.obtenerRoles().subscribe(data=>{
      console.log(data)
      this.listRols = data;
    }, error => {
      console.log(error);
    
    })
  }

  eliminarRol(id: any) {
    this.service.eliminarRol(id).subscribe(data => {
      this.toastr.error('El rol fue eliminado con exito' ,'rol Eliminado');
      this.obtenerRoles();
    }, error => {
      console.log(error);
    })
  }
}
