import { getVariousPokemons } from "./api.js";
import { mostrarPokemon } from "./ui.js";
import { inicializarBuscador } from "./search.js";

document.addEventListener("DOMContentLoaded", main);

let section = "";

async function main() {
    section = document.querySelector("section");
    inicializarBuscador();
    mostrarDeUnoEnUnoHasta(1000);
}

async function mostrarDeUnoEnUnoHasta(tope, loteSize = 10) {
    for (let i = 0; i < tope; i += loteSize) {
        const promesas = [];

        for (let j = i; j < i + loteSize && j < tope; j++) {
            promesas.push(getVariousPokemons(1, j));
        }

        const resultados = await Promise.allSettled(promesas);

        resultados.forEach((result) => {
            if (result.status === "fulfilled") {
                mostrarPokemon(result.value, section);
            }
        });
    }
}
