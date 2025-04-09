import {OMDbAPI as apiKey} from '../../configure.js';

export async function getMovies(peticion){
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${peticion}`;
    
    return getFromApi(url);
}

async function getFromApi(url){
    let data = {};
    let text = "";

    try{
        data = await fetch(url);
    }catch(error){
        console.log(error.message)
    }

    if (!data.ok){
        text = "Fallo al conectar con el servidor"    
    }else{
        text = await data.json();
    }

    return text.Search;
}