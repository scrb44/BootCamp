export function inicializarBuscador() {
    const input = document.querySelector(".barra-busqueda-input");

    input.addEventListener("input", (e) => {
        const valor = e.target.value.toLowerCase();
        const cartas = document.querySelectorAll("article.carta");

        cartas.forEach((carta) => {
            const nombre = carta
                .querySelector(".carta-section > h2")
                .innerText.toLowerCase();

            if (!nombre.includes(valor)) {
                carta.classList.add("no-buscada");
            } else {
                carta.classList.remove("no-buscada");
            }
        });
    });
}
