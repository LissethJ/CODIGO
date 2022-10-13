const btnGetMovies = document.querySelector("#get-movies");
const urlMovies = "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json"

btnGetMovies.onclick = async function () {
    const respuesta = await fetch(urlMovies);

    const data = await respuesta.json();
    console.log(data);
};

function readMovies(listPeliculas = movies.entries) {
    container.innerHTML += " ";
    listPeliculas.forEach((movie, index) => {
        container.innerHTML += `<div class="movie">
        <img src="">
        <h4>${movie.title}</h4>
        <p>
        ${movie.description}
        </p>
        </div>
    `;
        
    });

}