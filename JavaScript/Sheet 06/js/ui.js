export function mostrarPokemon(pokemons, domElement) {
    pokemons.forEach((pokemon) => {
        const article = document.createElement("article");
        article.classList.add("carta", "sombra");

        const header = document.createElement("header");
        header.classList.add("carta-header");

        const headerCenter = document.createElement("div");
        headerCenter.classList.add("carta-header-centrar");

        const img = document.createElement("img");
        img.src = pokemon.img;
        img.alt = pokemon.name;

        const id = document.createElement("h4");
        id.classList.add("carta-header-id");
        id.textContent = `ID/${pokemon.id}`;

        headerCenter.appendChild(img);
        header.appendChild(headerCenter);
        header.appendChild(id);

        const sectionCarta = document.createElement("section");
        sectionCarta.classList.add("carta-section");

        const nombre = document.createElement("h2");
        nombre.textContent = pokemon.name;
        sectionCarta.appendChild(nombre);

        const tipos = document.createElement("ul");
        tipos.classList.add("section-container-tipos");

        pokemon.types.forEach((tipo) => {
            const li = document.createElement("li");
            li.classList.add("tipo", `type-${tipo}`);
            li.textContent = tipo;
            tipos.appendChild(li);
        });

        sectionCarta.appendChild(tipos);

        if (pokemon.preevolucion !== "") {
            const div = document.createElement("div");
            div.classList.add("carta-div");

            const p1 = document.createElement("p");
            p1.classList.add("carta-div-p1");
            p1.textContent = "Evoluciona de:";

            const p2 = document.createElement("p");
            p2.classList.add("carta-div-p2");
            p2.textContent = pokemon.preevolucion;

            div.appendChild(p1);
            div.appendChild(p2);
            sectionCarta.appendChild(div);
        }

        article.appendChild(header);
        article.appendChild(sectionCarta);
        domElement.appendChild(article);
    });
}
