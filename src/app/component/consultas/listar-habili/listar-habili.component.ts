import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicePokemonService } from 'src/app/service/service-pokemon.service';
import { VERSION, ViewChild, ElementRef } from "@angular/core";


@Component({
  selector: 'app-listar-habili',
  templateUrl: './listar-habili.component.html',
  styleUrls: ['./listar-habili.component.css']
})
export class ListarHabiliComponent implements OnInit {

  pokemones: any;   
  gpokemones: any;   
  public dataAbilidades = [];
  public dataEspecie = [];
  
  @ViewChild('myNameElem') myNameElem: ElementRef | any;


  constructor(private pokeApi: ServicePokemonService) { }

  ngOnInit(): void {  
    
  }

  async getHabilidades(){         
        
    this.pokeApi.getPokeNombre(this.myNameElem.nativeElement.value).subscribe(
      res => {
        this.pokemones = res;          
        this.dataAbilidades = Object.values(this.pokemones.abilities[0].ability);          
        this.dataEspecie = Object.values(this.pokemones.species);                                          
      }, 
      err => {
        console.log('error: ' + err);
      }
    )

  }

}

