import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Pokemon, PokemonListItem, PokemonListResponse } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemons(limit: number = 20, offset: number = 0): Observable<Pokemon[]> {
    return this.http.get<PokemonListResponse>(
      `${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`
    ).pipe(
      switchMap((response: PokemonListResponse) => {
        const requests = response.results.map((item: PokemonListItem) =>
          this.http.get<Pokemon>(item.url)
        );
        return forkJoin(requests);
      }),
      map((pokemons: Pokemon[]) => pokemons),
      catchError((err) => {
        throw err;
      })
    );
  }
}