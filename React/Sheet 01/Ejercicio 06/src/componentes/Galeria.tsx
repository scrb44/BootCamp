import Imagen, { ImagenTypes } from "./Imagen";

interface GaleriaType {
    imagenes: ImagenTypes[]
}

function Galeria({imagenes}: GaleriaType){
    return (
        <>
            {imagenes.map((imagen) => <Imagen alt={imagen.alt} src={imagen.src}/>)}
        </>
    );
}

export default Galeria;