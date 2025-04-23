import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import PokePage from "./pages/Pokepage";

import "./css/variables.css";
import "./css/index.css";
import OrejasMofletes from "./componentes/OrejasMofletes";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon/" element={<Navigate to="/" />} />
                <Route path="/pokemon/:pokeName" element={<PokePage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>

            <OrejasMofletes />
        </>
    );
}

export default App;
