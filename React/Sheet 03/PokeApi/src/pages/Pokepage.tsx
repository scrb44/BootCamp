import { useParams } from "react-router-dom";
import CartaPokemon from "../componentes/CartaPokemon";

function PokePage() {
    const { pokeName } = useParams();

    // const pokemon = getItem(pokeName);

    console.log(pokeName);
    // console.log(pokemon);

    return <p>{pokeName}</p>;
}

export default PokePage;
