import React from "react";
import CartaPokemon from "./CartaPokemon";
import "../css/ListaPokemons.css";
import { Pokemon } from "../types/pokemon";

interface Props {
    pokemons: Pokemon[];
    isLoading: boolean;
}

const ListaPokemons: React.FC<Props> = ({ pokemons, isLoading }) => {
    if (isLoading) return <p className="cargando">Cargando Pokémon...</p>;
    if (pokemons.length === 0)
        return <p className="no-resultados">¡No se encontraron Pokémon!</p>;

    return (
        <section className="poke-container">
            {pokemons.map((pokemon) => (
                <CartaPokemon
                    key={`${pokemon.id}-${pokemon.name}`}
                    pokemon={pokemon}
                />
            ))}
        </section>
    );
};

export default ListaPokemons;

/*
import React from "react";
import { PokemonInfo } from "../types/pokemon";
import CartaPokemon from "./CartaPokemon";
import "../css/ListaPokemons.css";

interface Props {
    pokemons: PokemonInfo[];
}

const ListaPokemons: React.FC<Props> = ({ pokemons }) => {
    return (
        <section className="poke-container">
            {pokemons.map((pokemon) => (
                <CartaPokemon key={pokemon.id} pokemon={pokemon} />
            ))}
        </section>
    );
};

export default ListaPokemons;
*/
