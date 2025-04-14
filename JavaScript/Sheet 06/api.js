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
    const pokemons = [];

    const uncachedIDs = [];
    const uncachedIndexes = [];

    for (let i = 0; i < cargar; i++) {
        const id = offset + i + 1; // Los IDs empiezan en 1
        const cached = localStorage.getItem(`poke-${id}`);

        if (cached) {
            pokemons[i] = JSON.parse(cached);
        } else {
            uncachedIDs.push(id);
            uncachedIndexes.push(i);
        }
    }

    // Peticiones solo para los no cacheados
    const pokemonPromises = uncachedIDs.map((id) =>
        getFromApi(`${url}pokemon/${id}`)
    );
    const pokemonsRaw = await Promise.all(pokemonPromises);

    const speciesPromises = pokemonsRaw.map((p) => getFromApi(p.species.url));
    const speciesData = await Promise.all(speciesPromises);

    pokemonsRaw.forEach((dataPokProm, i) => {
        const especie = speciesData[i];
        const prePok = especie.evolves_from_species
            ? especie.evolves_from_species.name
            : "";

        const tipos = dataPokProm.types.map((tipo) => tipo.type.name);

        const pokeInfo = {
            id: dataPokProm.id,
            name: dataPokProm.name,
            types: tipos,
            preevolucion: prePok,
            img: dataPokProm.sprites.front_default,
            fav: false,
        };

        const index = uncachedIndexes[i];
        pokemons[index] = pokeInfo;

        // Guardamos en cache con ID
        localStorage.setItem(
            `poke-${dataPokProm.id}`,
            JSON.stringify(pokeInfo)
        );
    });

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
