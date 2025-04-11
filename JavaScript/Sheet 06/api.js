const url = "https://pokeapi.co/api/v2/";

async function getFromApi(url) {
    let data = {};
    let text = [];

    try {
        data = await fetch(url);
    } catch (error) {
        console.log(error.message);
    }

    if (!data.ok) {
        text = "Fallo al conectar con el servidor";
    } else {
        text = await data.json();
    }
    return text;
}

export async function getVariousPokemons(cargar, offset) {
    const preData = await getFromApi(
        `${url}pokemon/?limit=${cargar}&offset=${offset}`
    );

    const data = preData.results;

    let pokemons = [];

    for (let i = 0; i < data.length; i++) {
        const pokemon = data[i];

        const dataPokProm = await getFromApi(pokemon.url);
        const especie = await getFromApi(dataPokProm.species.url);
        const prePok = especie.evolves_from_species
            ? especie.evolves_from_species.name
            : "";

        let tipos = [];
        dataPokProm.types.forEach((tipo) => {
            tipos.push(tipo.type.name);
        });

        const dataPok = {
            id: dataPokProm.id,
            name: dataPokProm.name,
            types: tipos,
            preevolucion: prePok,
            img: dataPokProm.sprites.front_default,
        };
        pokemons.push(dataPok);
    }

    return pokemons;
}

/*

function getLineaEvolutiva(lineaEvolutiva) {
    const evoluciones = [{ name: lineaEvolutiva.chain.species.name, ev: 1 }];
    const evolucion = lineaEvolutiva.chain.evolves_to;

    if (evolucion.length > 0) {
        evolucion.forEach((poke) => {
            evoluciones.push({ name: poke.species.name, ev: 2 });

            const evolucion2 = poke.evolves_to;

            if (evolucion2.length > 0) {
                evolucion2.forEach((poke) => {
                    evoluciones.push({ name: poke.species.name, ev: 3 });
                });
            }
        });
    }
    return evoluciones;
}

function preevolucion(pokemon, lineaEvolutiva) {
    let ev = 0;
    lineaEvolutiva.forEach((linea) => {
        if (linea.name.toLowerCase() == pokemon.toLowerCase()) {
            ev = linea.ev;
        }
    });
    if (ev == 1) {
        return "";
    } else {
        let name = "";
        lineaEvolutiva.forEach((p) => {
            if (p.ev == ev - 1) name = p.name;
        });

        return name;
    }
}

*/
