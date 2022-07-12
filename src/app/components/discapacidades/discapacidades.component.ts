import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Discapacidad } from 'src/app/models/discapacidad';
import { DiscapacidadService } from 'src/app/services/discapacidad';

@Component({
  selector: 'app-discapacidades',
  templateUrl: './discapacidades.component.html',
  styleUrls: ['./discapacidades.component.css']
})
export class DiscapacidadesComponent implements OnInit {

  listD: Discapacidad[] = [];
  constructor(private service: DiscapacidadService ,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerDs()
  }
  obtenerDs(){
    this.service.obtenerDs().subscribe(data=>{
      console.log(data)
      this.listD = data;
    }, error => {
      console.log(error);
    
    })
  }

  eliminarD(id: any) {
    this.service.eliminarD(id).subscribe(data => {
      this.toastr.error('Discapacidad fue eliminada con exito' ,'Discapacidad Eliminada');
      this.obtenerDs();
    }, error => {
      console.log(error);
    })
  }
}
