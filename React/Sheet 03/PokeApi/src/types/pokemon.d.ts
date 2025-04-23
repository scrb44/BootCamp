export interface Pokemon {
    id: number;
    name: string;
    types: string[];
    evolvesFrom?: string;
    image: string;
    additionalinfo?: AdditionaInfoPokemon;
}
export interface AdditionalInfoPokemon {}

export interface PokemonListResponse {
    results: Array<{
        name: string;
        url: string;
    }>;
    count: number;
}

export interface PokemonApiResponse {
    id: number;
    name: string;
    types: Array<{
        type: {
            name: string;
        };
    }>;
    sprites: {
        other: {
            "official-artwork": {
                front_default: string;
            };
        };
    };
    species: {
        url: string;
    };
}

export interface SpeciesApiResponse {
    evolves_from_species: {
        name: string;
    } | null;
}
