//Reaccts Imports
import { useState, useEffect, useCallback, useRef } from "react";

//Tipos
import { Pokemon } from "../types/pokemon";

//Funciones
import useItemsPerRow from "../hooks/useItemsPerRow";
import { getVariousPokemons } from "../services/pokemon";

// Componentes
import ListaPokemons from "../componentes/ListaPokemons";
import Header from "../componentes/Header";

// CSS
import "../css/variables.css";
import "../css/index.css";

function Home() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const itemsPerRow = useItemsPerRow(isLoading);
    const itemsToLoad = itemsPerRow * 4;
    const prevSearchTerm = useRef("");

    const loadPokemons = useCallback(
        async (reset = false) => {
            setIsLoading(true);
            try {
                const offset = reset ? 0 : visibleCount;

                const { pokemons: nuevos, hasMore } = await getVariousPokemons(
                    itemsToLoad,
                    offset,
                    searchTerm
                );

                setHasMore(hasMore);

                if (reset) {
                    setPokemons(nuevos); // sobrescribe todo en búsqueda nueva
                    setVisibleCount(nuevos.length);
                } else {
                    setPokemons((prev) => [...prev, ...nuevos]); // agrega nuevos
                    setVisibleCount((prev) => prev + nuevos.length);
                }
            } catch (error) {
                console.error("Error cargando Pokémon:", error);
            }
            setIsLoading(false);
        },
        [searchTerm, visibleCount, itemsToLoad]
    );

    useEffect(() => {
        const debounce = setTimeout(() => {
            if (searchTerm !== prevSearchTerm.current) {
                prevSearchTerm.current = searchTerm;
                loadPokemons(true);
            }
        }, 300);
        return () => clearTimeout(debounce);
    }, [searchTerm, loadPokemons]);

    const handleLoadMore = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            e.stopPropagation();
            if (!isLoading) {
                loadPokemons();
            }
        },
        [isLoading, loadPokemons]
    );

    useEffect(() => {
        if (itemsPerRow > 0) {
            loadPokemons(true);
        }
    }, [itemsPerRow]);

    return (
        <>
            <Header onBuscar={setSearchTerm} />
            <main>
                <ListaPokemons pokemons={pokemons} isLoading={isLoading} />
                {hasMore && !isLoading && (
                    <div className="centrar">
                        <button
                            onClick={handleLoadMore}
                            className="boton-cargar"
                        >
                            Cargar más
                        </button>
                    </div>
                )}
            </main>
        </>
    );
}

export default Home;
