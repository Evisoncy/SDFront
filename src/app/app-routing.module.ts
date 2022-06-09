import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';

// componentes
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const routes: Routes = [
  { path: '', component: NavBarComponent,
    children: [
      { path: '', component: ListarUsuariosComponent },
      { path: 'crear-usuario', component: CrearUsuarioComponent },
      { path: 'editar-usuario/:id', component: CrearUsuarioComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
