import {moverJugador, calcularTamanio} from './jugador.js';

const tiempoCuenta = 1;
let body = "";
let jugador = "";
let contador = "";


document.addEventListener("DOMContentLoaded",  main);

function main(){
    body = document.querySelector("body");
    jugador = document.getElementById("jugador");
    contador = document.getElementById("contador");

    cuentaRegresiva(tiempoCuenta);
    calcularTamanio(body, jugador);
    
    document.addEventListener("keydown", moverJugadorAux);
    window.addEventListener("resize", calcularTamanioAux);
}

function moverJugadorAux(ev){
    moverJugador(ev, jugador);
}

function calcularTamanioAux(){
    calcularTamanio(body, jugador)
}

function espera(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function cuentaRegresiva(cuenta) {
    for (let x = cuenta; x >= 0; x--) {
        contar(x);
        await espera(1000);
    }
}

function contar(x){
    if(x >0){
        contador.innerText = x;
    }else{
        eliminarJugador();
    }
}

function eliminarJugador(){
    jugador.classList.add("eliminado");
    body.classList.add("eliminado");
    contador.innerText = "";

    espera(1000).then(()=>{
        contador.innerText = "Has perdido";
        contador.classList.add("eliminado");
    });

    document.removeEventListener("keydown", moverJugadorAux);
    window.removeEventListener("resize", calcularTamanioAux);
}