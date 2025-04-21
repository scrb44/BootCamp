import "./../css/header.css";

interface HeaderProps {
    onBuscar: (valor: string) => void;
}

function Header({ onBuscar }: HeaderProps) {
    return (
        <header>
            <nav className="barra-busqueda">
                <input
                    className="barra-busqueda-input sombra"
                    type="search"
                    placeholder="Filtra pokemons por nombre"
                    onChange={(e) => onBuscar(e.target.value)}
                />
            </nav>
        </header>
    );
}

export default Header;
