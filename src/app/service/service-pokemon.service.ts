import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServicePokemonService {

  private api_PokeEspecie = "";
  private api_pokemon = "";
  private api_pokeNombre = "";

  

  constructor(private http: HttpClient) {
    this.api_PokeEspecie = `https://pokeapi.co/api/v2/pokemon-species/`;
    this.api_pokemon = `https://pokeapi.co/api/v2/pokemon/`;
    this.api_pokeNombre = `https://pokeapi.co/api/v2/pokemon/`;
  }

  getPokeEspecie(){
    return this.http.get(this.api_PokeEspecie);
  }

  getPokemon(){
    return this.http.get(this.api_pokemon);
  }

  getPokeNombre(nombre: string){
    return this.http.get(`${this.api_pokeNombre}${nombre}`);
  }
  

}
