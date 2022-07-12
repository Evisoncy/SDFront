import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ficha } from 'src/app/models/ficha';
import { FichaService } from 'src/app/services/ficha.service';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-ficha-medica',
  templateUrl: './ficha-medica.component.html',
  styleUrls: ['./ficha-medica.component.css']
})
export class FichaMedicaComponent implements OnInit {
  fichaForm!: FormGroup;
  usuario=[];
  id: string | null;
  activatedRoute: any;
  constructor(private _usuarioService:FichaService,private service:UsuarioService,
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
        anio: ['',Validators.required]
    })
     this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    
  }
  agregarFicha() {
    
      const PRODUCTO: Ficha = {
      diagnostico: this.fichaForm.get('diagnostico')?.value,
      tipoSangre: this.fichaForm.get('tipoSangre')?.value,
      medicamentoHabitual: this.fichaForm.get('medicamentoHabitual')?.value,
      medicamentoAlergico: this.fichaForm.get('medicamentoAlergico')?.value,
      seguroMedico:this.fichaForm.get('seguroMedico')?.value,
      anio:this.fichaForm.get('anio')?.value
    }
     
    console.log(PRODUCTO); 
      
      this._usuarioService.guardarFicha(PRODUCTO).subscribe(data => {
        this.toastr.success('La ficha fue registrada con exito!', 'Ficha Registrada');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.fichaForm.reset();
      })
    
  }
}
