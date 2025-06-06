import {
    Pokemon,
    PokemonListResponse,
    PokemonApiResponse,
    SpeciesApiResponse,
} from "../types/pokemon";
import { get } from "./api";
import { getItem, setItem } from "./cache";

const POKE_LIST_KEY = "poke-lista-completa";
const POKE_CACHE_PREFIX = "poke-";
const DEAFAULT_IMG =
    "https://upload.wikimedia.org/wikipedia/commons/5/53/Poké_Ball_icon.svg";

export async function initializePokemonList(): Promise<void> {
    if (getItem(POKE_LIST_KEY)) return;

    const data = await get<PokemonListResponse>("pokemon?limit=1");
    const fullList = await get<PokemonListResponse>(
        `pokemon?limit=${data.count}`
    );

    setItem(POKE_LIST_KEY, fullList.results);
}

export async function getVariousPokemons(
    itemsToLoad: number,
    offset: number,
    searchTerm: string = ""
): Promise<{ pokemons: Pokemon[]; hasMore: boolean }> {
    await initializePokemonList();

    const listaCompleta =
        getItem<{ name: string; url: string }[]>(POKE_LIST_KEY) || [];

    const listaFiltrada = listaCompleta.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filtrados = listaFiltrada.slice(offset, offset + itemsToLoad);

    const uncached = filtrados.filter((p) => {
        const id = p.url.split("/").slice(-2)[0];
        return !getItem(`${POKE_CACHE_PREFIX}${id}`);
    });

    if (uncached.length > 0) {
        const pokemonData = await Promise.all(
            uncached.map((p) => get<PokemonApiResponse>(p.url))
        );

        const speciesData = await Promise.all(
            pokemonData.map((data) => get<SpeciesApiResponse>(data.species.url))
        );

        pokemonData.forEach((data, index) => {
            const imgUrl = data.sprites.other["official-artwork"].front_default;
            const pokemon: Pokemon = {
                id: data.id,
                name: data.name,
                types: data.types.map((t) => t.type.name),
                evolvesFrom: speciesData[index]?.evolves_from_species?.name,
                image: imgUrl ? imgUrl : DEAFAULT_IMG,
                fav: false,
            };
            setItem(`${POKE_CACHE_PREFIX}${data.id}`, pokemon);
        });
    }

    const pokemons = filtrados.map((p) => {
        const id = p.url.split("/").slice(-2)[0];
        return getItem<Pokemon>(`${POKE_CACHE_PREFIX}${id}`)!;
    });

    const hasMore = offset + itemsToLoad < listaFiltrada.length;

    return { pokemons, hasMore };
}

export async function getPokemonDetailedInfo(name: string) {
    let existsPokemon = true;
    const listaCompleta =
        getItem<{ name: string; url: string }[]>(POKE_LIST_KEY) || [];
    const po = listaCompleta.filter((p) => {
        p.name.toLowerCase() == name.toLowerCase();
    });

    // const pokeDetailedInfo = get<PokemonApiResponse>(po.url);
    // console.log(pokeDetailedInfo);

    return { po, existsPokemon };
}
