export async function getUsuarios(){
    const url = "https://jsonplaceholder.typicode.com/users";
    
    return getFromApi(url);
}

export async function getUserPosts(userID) {
    const url = "https://jsonplaceholder.typicode.com/posts?userid="+userID;
    return getFromApi(url);
}

async function getFromApi(url){
    let data = {};
    let text = "";

    try{
        data = await fetch(url);
    }catch(error){
        console.log(error.message)
    }

    if (!data.ok){
        text = "Fallo al conectar con el servidor"    
    }else{
        text = await data.json();
    }
    
    return text;
}