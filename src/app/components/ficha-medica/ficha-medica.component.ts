import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Discapacidad } from 'src/app/models/discapacidad';
import { Ficha } from 'src/app/models/ficha';
import { DiscapacidadService } from 'src/app/services/discapacidad';
import { FichaService } from 'src/app/services/ficha.service';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-ficha-medica',
  templateUrl: './ficha-medica.component.html',
  styleUrls: ['./ficha-medica.component.css']
})
export class FichaMedicaComponent implements OnInit {
  fichaForm!: FormGroup;
  listFicha : []=[];
  correo: any
  listD:Discapacidad[]=[];
  listS=[{'nombre':'A+'},{'nombre':'A-'},{'nombre':'B+'},{'nombre':'B-'},{'nombre':'AB+'},{'nombre':'AB-'},{'nombre':'O+'},{'nombre':'O-'}];
  listSeguro=[{'nombre':'EPS'},{'nombre':'UNMSM'},{'nombre':'MINSA'},{'nombre':'ESSALUD'}];
  //id!: string | null;
  activatedRoute: any;
  constructor(private d:DiscapacidadService ,private _usuarioService:FichaService,private service:UsuarioService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {

   
  
     
   this.fichaForm = this.fb.group({
        diagnostico: ['', Validators.required],
        tipoSangre: ['', Validators.required],
        medicamentoHabitual: ['', Validators.required],
        medicamentoAlergico: ['', Validators.required],
        seguroMedico: ['', Validators.required],
        anio: ['',Validators.required],
        discapacidad: ['',Validators.required],
        correo: ['']
    })
      const id = this.aRouter.snapshot.paramMap.get('id');
      this.service.obtenerUsuario(id).subscribe(data=>{
      this.fichaForm.patchValue({ correo:data.correo });
      
     })
     
     
     
     
   }

  ngOnInit(): void {
    this.obtenerDs()
  }
  
  agregarFicha() {
    
    const id = this.aRouter.snapshot.paramMap.get('id');
      const PRODUCTO: Ficha = {
      diagnostico: this.fichaForm.get('diagnostico')?.value,
      tipoSangre: this.fichaForm.get('tipoSangre')?.value,
      medicamentoHabitual: this.fichaForm.get('medicamentoHabitual')?.value,
      medicamentoAlergico: this.fichaForm.get('medicamentoAlergico')?.value,
      seguroMedico:this.fichaForm.get('seguroMedico')?.value,
      anio:this.fichaForm.get('anio')?.value,
      discapacidad:this.fichaForm.get('discapacidad')?.value,
      correo: this.fichaForm.get('correo')?.value,
      
    }
     
    console.log(PRODUCTO); 
      
      this._usuarioService.guardarFicha(PRODUCTO).subscribe(data => {
        this.toastr.success('La ficha fue registrada con exito!', 'Ficha Registrada');
        this.router.navigate(['/perfil',id]);
      }, error => {
        console.log(error);
        this.fichaForm.reset();
      })
    
  }
  obtenerDs(){
    this.d.obtenerDs().subscribe(data=>{
     
      this.listD = data;
    }, error => {
      console.log(error);
    
    })
   
  }
}