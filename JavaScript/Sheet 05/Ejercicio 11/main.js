import {suma as s, multiplica as m} from './mathUtils.js';

document.addEventListener("DOMContentLoaded", main);

function main(){
    let text = `3 + 4 = ${s(3,4)}\n3 x 4 = ${m(3,4)}`

    console.log(text)
    document.querySelector("p").innerText = text;
}