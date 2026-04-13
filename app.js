"use strict";

console.log("Movie App - DAG 2 starter...");


const movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Pulp Fiction", "Lord of the Rings", "The Revenant"];

console.log("Antal film:", movies.length);


const movieList = document.querySelector("#movie-list");
console.log(movieList);

for (const movie of movies) {
  const html =  `
    <article class="movie-card">
      <div class="movie-info">
        <h3>${movie}</h3>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}
