export async function getUsuarios(){
    const url = "https://jsonplaceholder.typicode.com/users";
    const data = await fetch(url);
    let text = "";

    if (!data.ok){
        text = "Fallo al conectar con el servidor"    
    }else{
        text = await data.json();
    }
    return text;
}