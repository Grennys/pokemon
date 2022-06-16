import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { ListarEsComponent } from './component/consultas/listar-es/listar-es.component';
import { ListarPokeComponent } from './component/consultas/listar-poke/listar-poke.component';
import { ServicePokemonService } from './service/service-pokemon.service';
import { ListarHabiliComponent } from './component/consultas/listar-habili/listar-habili.component';
import { ListarPokenombreComponent } from './component/consultas/listar-pokenombre/listar-pokenombre.component';

@NgModule({
  declarations: [
    AppComponent,    
    NavComponent,
    FooterComponent,
    PrincipalComponent,
    ListarEsComponent,
    ListarPokeComponent,
    ListarHabiliComponent,
    ListarPokenombreComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers:[
    ServicePokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
