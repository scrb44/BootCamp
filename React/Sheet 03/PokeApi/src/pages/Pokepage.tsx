import { useNavigate, useParams } from "react-router-dom";

function PokePage() {
    const { pokeName } = useParams();
    const navigate = useNavigate();

    return (
        <>
            <p>{pokeName}</p>
            <button onClick={() => navigate("/")}>Volver a pokedex</button>
        </>
    );
}

export default PokePage;
