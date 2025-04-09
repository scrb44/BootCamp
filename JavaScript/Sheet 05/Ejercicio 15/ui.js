export function mostrarMovies(movies){
    const main = document.querySelector("main");
    let html = "";

    console.log(movies);
    
    movies.forEach(movie => {
        html += `
            <article>
                <img src="${movie.Poster}" alt="Poster de ${movie.Title}">
                <h2>${movie.Title}</h2>
            </article>
        `
    });

    main.innerHTML = html;
}