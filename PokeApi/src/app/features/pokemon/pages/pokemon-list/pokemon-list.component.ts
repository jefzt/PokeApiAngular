import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: false,
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  cargando: boolean = false;
  error: string = '';
  paginaActual: number = 1;
  limit: number = 20;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.cargar();
  }

  get offset(): number {
    return (this.paginaActual - 1) * this.limit;
  }

  cargar(): void {
    this.cargando = true;
    this.error = '';
    this.pokemonService.getPokemons(this.limit, this.offset).subscribe({
      next: (data: Pokemon[]) => {
        this.pokemons = data;
        this.cargando = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      error: (err: unknown) => {
        this.error = 'Error al cargar los Pokémon. Intenta de nuevo.';
        this.cargando = false;
      }
    });
  }

  anterior(): void {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.cargar();
    }
  }

  siguiente(): void {
    this.paginaActual++;
    this.cargar();
  }
}