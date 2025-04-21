import { useState, useEffect, useCallback } from "react";
import ListaPokemons from "./componentes/ListaPokemons";
import OrejasMofletes from "./componentes/OrejasMofletes";
import Header from "./componentes/Header";
import { getVariousPokemons } from "./services/pokemon";
import useItemsPerRow from "./hooks/useItemsPerRow";
import "./css/variables.css";
import "./css/index.css";
import { Pokemon } from "./types/pokemon";

function App() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(0);
    const itemsPerRow = useItemsPerRow(isLoading);
    const itemsToLoad = itemsPerRow * 4;

    const loadPokemons = useCallback(async () => {
        setIsLoading(true);
        try {
            const nuevos = await getVariousPokemons(
                itemsToLoad,
                page * itemsToLoad,
                searchTerm
            );
            setPokemons((prev) => {
                const unique = new Map(prev.map((p) => [p.id, p]));
                nuevos.forEach((p) => unique.set(p.id, p));
                return Array.from(unique.values());
            });
        } catch (error) {
            console.error("Error cargando Pokémon:", error);
        }
        setIsLoading(false);
    }, [page, itemsToLoad, searchTerm]);

    useEffect(() => {
        const debounce = setTimeout(() => {
            setPage(0);
            loadPokemons();
        }, 300);
        return () => clearTimeout(debounce);
    }, [searchTerm, loadPokemons]);

    useEffect(() => {
        loadPokemons();
    }, [page, loadPokemons]);

    return (
        <>
            <OrejasMofletes />
            <Header onBuscar={setSearchTerm} />
            <main>
                <ListaPokemons pokemons={pokemons} isLoading={isLoading} />
            </main>
        </>
    );
}
/*
                <div className="centrar">
                    <button
                        onClick={() => setPage((p) => p + 1)}
                        className="boton-cargar"
                        disabled={isLoading}
                    >
                        {isLoading ? "Cargando..." : "Cargar más"}
                    </button>
                </div>
*/

export default App;
