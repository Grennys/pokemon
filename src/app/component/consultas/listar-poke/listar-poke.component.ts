import { Component, OnInit } from '@angular/core';
import { ServicePokemonService } from 'src/app/service/service-pokemon.service';

@Component({
  selector: 'app-listar-poke',
  templateUrl: './listar-poke.component.html',
  styleUrls: ['./listar-poke.component.css']
})
export class ListarPokeComponent implements OnInit {

  pokemones: any; 
  public dataPokemones: any = [];

  constructor(private pokeApi: ServicePokemonService) { }

  ngOnInit(): void {
    this.getPokemones();
  }

  async getPokemones(){
    this.pokeApi.getPokemon().subscribe(
      res =>{
        this.pokemones = res
        this.dataPokemones = Object.values(this.pokemones.results);
      }, 
      err => {
        console.log('Error' + err);
      }
    )
  }

}
