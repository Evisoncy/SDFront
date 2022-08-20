import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { CrearDisComponent } from './components/discapacidades/crear-dis/crear-dis.component';
import { DiscapacidadesComponent } from './components/discapacidades/discapacidades.component';
import { FichaMedicaComponent } from './components/ficha-medica/ficha-medica.component';
import { IncidenciaComponent } from './components/incidencia/incidencia.component';
import { MostrarIncidenciaComponent } from './components/incidencia/mostrar-incidencia/mostrar-incidencia.component';
import { InicioComponent } from './components/inicio/inicio.component';

// componentes
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { MapsComponent } from './components/maps/maps.component';
import { MostrarFichaMedicaComponent } from './components/mostrar-ficha-medica/mostrar-ficha-medica.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PerfilComponent } from './components/perfil/perfil.component';

import { PruebaComponent } from './components/prueba/prueba.component';
import { CrearRolComponent } from './components/roles/crear-rol/crear-rol.component';
import { RolesComponent } from './components/roles/roles.component';

const routes: Routes = [
  { path: '', component: NavBarComponent,
    children: [
      { path: '', component: InicioComponent },
      { path: 'usuarios', component:ListarUsuariosComponent},
      { path: 'inicio', component: InicioComponent},
      { path: 'crear-usuario', component: CrearUsuarioComponent },
      { path: 'editar-usuario/:id', component: CrearUsuarioComponent },
      { path: 'ficha-medica/:id', component: FichaMedicaComponent},
      { path: 'mostrar-ficha/:id/:nombres',component:MostrarFichaMedicaComponent},
      { path: 'roles', component: RolesComponent },
      { path: 'crear-rol', component: CrearRolComponent},
      { path: 'discapacidades', component: DiscapacidadesComponent},
      { path: 'crear-dis', component:CrearDisComponent},
      { path: 'map', component: MapsComponent},
      { path: 'incidencia/:id', component: IncidenciaComponent},
      { path: 'mostrar-incidencia/:id', component: MostrarIncidenciaComponent},
      { path: 'perfil/:id', component: PerfilComponent},
      { path: '**', redirectTo: '', pathMatch: 'full' }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
