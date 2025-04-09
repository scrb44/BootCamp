import {getUsuarios} from './api.js';
import {mostrarUsuarios} from './ui.js';

document.addEventListener("DOMContentLoaded", main);

async function main(){
    const data = await getUsuarios();
    mostrarUsuarios(data);
}