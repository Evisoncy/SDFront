import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FichaService } from 'src/app/services/ficha.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  forma!:FormGroup;
  existeFormulario=false;
 
  
  
  id!: string | null;

  constructor(private fb:FormBuilder, private activatedRoute : ActivatedRoute,
              private router:Router, private serviceIncidencia:FichaService, private userService: UsuarioService) {
    
    
   // const id = this.activatedRoute.snapshot.paramMap.get('id');
    const id = this.activatedRoute.snapshot.paramMap.get('id');
  
    this.userService.obtenerUsuario(id).subscribe(data=>{
     
    console.log(data)
    })
    this.FormIncidencia()
   }

  ngOnInit(): void {
  
  }


  async FormIncidencia(){
    let dni=this.activatedRoute.snapshot.params['codigo'];
    console.log(dni)
    const email = await this.userService.obtenerUsuario(dni).toPromise()

    this.forma = this.fb.group({
      diagnostico: [''],
      tipoSangre: [''],
      medicamentoHabitual: [''],
      medicamentoAlergico: [''],
      seguroMedico : [''],
      anio:[''],
      discapacidad:[''],
      correo: email[''].correo
  

    });
    
    this.existeFormulario=true
    
    
  
  }

  incidencia(){
    
    console.log(this.forma.value);
    this.serviceIncidencia.guardarFicha(this.forma.value).subscribe(
      (data)=>{
        console.log(data);
      })

  }



}
