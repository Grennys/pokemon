import { Component, OnInit } from '@angular/core';
import { ServicePokemonService } from 'src/app/service/service-pokemon.service';

@Component({
  selector: 'app-listar-es',
  templateUrl: './listar-es.component.html',
  styleUrls: ['./listar-es.component.css']
})
export class ListarEsComponent implements OnInit {

  pokemones: any;
  public dataPokemon: any = [];  

  constructor(private pokeApi: ServicePokemonService) { }

  ngOnInit(): void {

    this.pokeApi.getPokeEspecie().subscribe(
      res => {
        this.pokemones = res;
        this.dataPokemon = Object.values(this.pokemones.results);
      },
      err =>{
        console.log('Error: ' + err)
      }
    )
  }

}
