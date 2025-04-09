import {getMovies} from './api.js';
import {mostrarMovies} from './ui.js';

document.addEventListener("DOMContentLoaded", main);

function main(){
    const button = document.querySelector("button");
    
    button.addEventListener("click", buscarPeliculas);
}

async function buscarPeliculas() {
    const search  = document.querySelector("input").value;

    if(search != ""){
        const movies = await getMovies(search);
        mostrarMovies(movies);
    }
}