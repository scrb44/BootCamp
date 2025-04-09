export function mostrarUsuarios(lista){
    const ul = document.querySelector("ul");
    let text = "";

    if(typeof lista == "string"){
        text = lista;
    }else{
        lista.forEach(persona => {
            text += `<li data-my-id="${persona.id}">${persona.name}</li>`
        });
    }
    ul.innerHTML = text;
}

export function mostrarPosts(posts, user){
    const div = document.querySelector("div");
    let html = "";

    html = "<h1>Posts de "+user+"</h1>";
    posts.forEach(post =>{
        html += `
        <article >
            <h2>
                ${post.title}
            </h2>
            ${post.body}
        </article>
        `
    });
    div.innerHTML = html;
    console.log(posts);
}