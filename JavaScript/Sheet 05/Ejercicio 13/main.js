document.addEventListener("DOMContentLoaded", main);

function main(){
    document.querySelector("button").addEventListener("click", cargarMates);
}

function cargarMates(){
    import("./mathUtils.js").then( data =>{
        console.log("La suma entre 10 y 5 es: "+data.sumar(10,5));
        console.log("La multiplicación entre 10 y 5 es: "+data.multiplicar(10,5));
    });
}