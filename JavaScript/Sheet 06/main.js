import { getVariousPokemons } from "./api.js";

document.addEventListener("DOMContentLoaded", main);

let section = "";

async function main() {
    section = document.querySelector("section");
    mostrarDeUnoEnUnoHasta(40);
}

async function mostrarDeUnoEnUnoHasta(tope) {
    for (let offset = 0; offset < tope; offset++) {
        const pokemons = await getVariousPokemons(1, offset);
        mostrarPokemon(pokemons);
    }
}

function mostrarPokemon(pokemons) {
    let htmlInsert = section.innerHTML;

    pokemons.forEach((pokemon) => {
        htmlInsert += `
            <article class="carta sombra">
                <header class="carta-header">
                    <div class="carta-header-centrar">
                        <img src="${pokemon.img}" alt="${pokemon.name}" />
                    </div>
                    <h4 class="carta-header-id">ID/${pokemon.id}</h4>
                </header>
                <section class="carta-section">
                    <h2>${pokemon.name}</h2>
                    <ul class="section-container-tipos">
                    `;
        pokemon.types.forEach((tipo) => {
            htmlInsert += `<li class="tipo type-${tipo}">${tipo}</li>`;
        });
        htmlInsert += `</ul>`;

        if (pokemon.preevolucion != "") {
            htmlInsert += `
                <div class="carta-div">
                    <p class="carta-div-p1">Evoluciona de:</p>
                    <p class="carta-div-p2">${pokemon.preevolucion}</p>
                </div>`;
        }

        htmlInsert += `
                </section>
            </article>`;
    });

    section.innerHTML = htmlInsert;
}
