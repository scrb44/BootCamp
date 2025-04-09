import {getUsuarios, getUserPosts} from './api.js';
import {mostrarUsuarios, mostrarPosts} from './ui.js';

document.addEventListener("DOMContentLoaded", main);

async function main(){
    const ul = document.querySelector("ul");
    const data = await getUsuarios();

    ul.addEventListener("click", elegirUser);
    mostrarUsuarios(data);
}

async function elegirUser(ev) {
    const li = ev.target;

    if(li.tagName == "LI"){
        const id = li.getAttribute("data-my-id")
        const posts = await getUserPosts(id);
        
        mostrarPosts(posts, ev.target.innerText);
    }
}