// CartaPokemon.tsx
import React from "react";
import BotonTipo from "./BotonTipo";
import { Pokemon } from "../types/pokemon";
import "../css/CartaPokemon.css";

interface Props {
    pokemon: Pokemon;
}

const CartaPokemon: React.FC<Props> = ({ pokemon }) => {
    return (
        <article className="carta sombra">
            <header className="carta-header">
                <div className="carta-header-centrar">
                    <img src={pokemon.image ?? ""} alt={pokemon.name} />
                </div>
                <h4 className="carta-header-id">ID/{pokemon.id}</h4>
            </header>

            <section className="carta-section">
                <h2>{pokemon.name}</h2>
                <ul className="section-container-tipos">
                    {pokemon.types.map((tipo) => (
                        <BotonTipo key={tipo} tipo={tipo} />
                    ))}
                </ul>

                {pokemon.evolvesFrom !== "" && (
                    <div className="carta-div">
                        <p className="carta-div-p1">Evoluciona de:</p>
                        <p className="carta-div-p2">{pokemon.evolvesFrom}</p>
                    </div>
                )}
            </section>
        </article>
    );
};

export default CartaPokemon;
