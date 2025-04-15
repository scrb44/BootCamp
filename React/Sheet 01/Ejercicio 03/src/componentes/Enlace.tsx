export interface EnlaceTypes {
    texto: string,
    url: string
}

function Enlace({texto, url}: EnlaceTypes){
    return <a href={url}>{texto}</a>
}

export default Enlace;