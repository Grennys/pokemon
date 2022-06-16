import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEsComponent } from './component/consultas/listar-es/listar-es.component';
import { ListarHabiliComponent } from './component/consultas/listar-habili/listar-habili.component';
import { ListarPokeComponent } from './component/consultas/listar-poke/listar-poke.component';
import { ListarPokenombreComponent } from './component/consultas/listar-pokenombre/listar-pokenombre.component';
import { PrincipalComponent } from './component/principal/principal.component';

const routes: Routes = [  
  {
    path: 'inicio',
    component: PrincipalComponent
  },
  {
    path: 'listar-especie',
    component: ListarEsComponent
  },
  {
    path: 'listar-pokemones',
    component: ListarPokeComponent
  },
  {
    path: 'listar-habilidades',
    component: ListarHabiliComponent
  },
  {
    path: 'listar-nombre',
    component: ListarPokenombreComponent
  },
  {
    path: '',
    component: PrincipalComponent
  },
  {
    path: '**',
    component: PrincipalComponent
  
  }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
