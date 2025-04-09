let x = 0;
let y = 0;
let bodyWidth = 0;
let bodyHeigth = 0;
const posJugador = 20
const movimiento = 10;

export function moverJugador(ev, jugador){
    const tecla = ev.key.toLowerCase();
    if( tecla == 'a' || tecla == "arrowleft"){
        mover(jugador, -movimiento, 0);
    }else if (tecla == 'd' || tecla == "arrowright"){
        mover(jugador, movimiento, 0);
    }else if (tecla == 'w' || tecla == "arrowup"){
        mover(jugador, 0, -movimiento);
    }else if (tecla == 's' || tecla == "arrowdown"){
        mover(jugador, 0, movimiento);
    }
}

export function calcularTamanio(body, jugador){
    bodyWidth = body.offsetWidth;
    bodyHeigth = body.offsetHeight;
    mover(jugador);
}

function mover(jugador, cambioX = 0, cambioY = 0){
    x += cambioX;
    y += cambioY;

    if(Math.abs(x) > (bodyWidth-posJugador)/2){
        x = Math.sign(x)*(bodyWidth - posJugador)/2;
    }
    if(Math.abs(y) > (bodyHeigth-posJugador)/2){
        y = Math.sign(y)*(bodyHeigth - posJugador)/2;
    }
    jugador.style.transform = `translate(${x}px, ${y}px)`;
}
