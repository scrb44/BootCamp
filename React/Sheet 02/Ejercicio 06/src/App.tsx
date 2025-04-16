import { useEffect, useState } from "react";
import "./App.css";

interface PokeData {
    id: number;
    nombre: string;
}

function App() {
    const [pokemones, setPokemones] = useState<PokeData[]>([]);
    const url = "https://pokeapi.co/api/v2/pokemon/";

    // const pokemons = [1];
    const pokemons = [1, 5, 200, 105, 20];

    useEffect(() => {
        let controller = new AbortController();

        pokemons.map((pokeID) => {
            try {
                fetch(url + pokeID, { signal: controller.signal })
                    .then((res) => res.json())
                    .then((res) => {
                        setPokemones((a) => [
                            ...a,
                            { id: pokeID, nombre: res.name },
                        ]);
                    });
            } catch (error) {
                console.log(error);
            }
        });
        return () => controller.abort();
    }, []);

    return (
        <>
            {pokemones.map((pok) => (
                <p key={pok.id}>{pok.nombre}</p>
            ))}
        </>
    );
}

export default App;
