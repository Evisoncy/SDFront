import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FichaMedicaComponent } from './components/ficha-medica/ficha-medica.component';
import { MostrarFichaMedicaComponent } from './components/mostrar-ficha-medica/mostrar-ficha-medica.component';
import { RolesComponent } from './components/roles/roles.component';
import { CrearRolComponent } from './components/roles/crear-rol/crear-rol.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DiscapacidadesComponent } from './components/discapacidades/discapacidades.component';
import { CrearDisComponent } from './components/discapacidades/crear-dis/crear-dis.component';
import { MapsComponent } from './components/maps/maps.component';
import { PruebaComponent } from './components/prueba/prueba.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    ListarUsuariosComponent,
    NavBarComponent,
    FichaMedicaComponent,
    MostrarFichaMedicaComponent,
    RolesComponent,
    CrearRolComponent,
    InicioComponent,
    DiscapacidadesComponent,
    CrearDisComponent,
    MapsComponent,
    PruebaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
