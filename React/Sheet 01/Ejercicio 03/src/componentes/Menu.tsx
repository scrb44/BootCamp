import Enlace, { EnlaceTypes } from "./Enlace";

interface MenuProps {
    enlaces: EnlaceTypes[];
}

function Menu({enlaces}: MenuProps){
    let JSX = (
        <>
        {enlaces.map((enlace, indice) => 
            <><Enlace key={indice} {...enlace}/><br /></>
        )}
        </>
    );
    return JSX;
}

export default Menu;