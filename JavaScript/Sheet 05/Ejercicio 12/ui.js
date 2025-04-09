export function mostrarUsuarios(lista){
    const p = document.querySelector("p");
    let text = "";

    if(typeof lista == "string"){
        text = lista;
    }else{
        text = "Lista de usuarios:\n"
        lista.forEach(persona => {
            text += `- ${persona.name}\n`
        });
    }
    p.innerText = text;
}