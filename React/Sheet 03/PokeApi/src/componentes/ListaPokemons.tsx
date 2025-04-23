import React from "react";
import CartaPokemon from "./CartaPokemon";
import "../css/ListaPokemons.css";
import { Pokemon } from "../types/pokemon";

interface Props {
    pokemons: Pokemon[];
    isLoading: boolean;
}

const ListaPokemons: React.FC<Props> = ({ pokemons, isLoading }) => {
    if (pokemons.length === 0)
        return <p className="no-resultados">¡No se encontraron Pokémon!</p>;

    return (
        <>
            <section className="poke-container">
                {pokemons.map((pokemon) => (
                    <CartaPokemon
                        key={`${pokemon.id}-${pokemon.name}`}
                        pokemon={pokemon}
                    />
                ))}
            </section>
            {isLoading && <p className="cargando">Cargando Pokémon...</p>}
        </>
    );
};

export default ListaPokemons;
