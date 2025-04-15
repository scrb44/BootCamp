export interface ImagenTypes{
    src: string,
    alt: string
}
function Imagen({src, alt}: ImagenTypes){
    return <img src={src} alt={alt} />
}

export default Imagen;