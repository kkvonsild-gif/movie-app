"use strict";

console.log("Movie App starter...");

const movies = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    image: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    image: "https://www.nfbio.dk/sites/nfbio.dk/files/movie-posters/HO00002239_103618.jpg",
  },
  {
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    image: "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: "28 Years Later",
    year: 2025,
    rating: 6.6,
    image: "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: "Bugonia",
    year: 2025,
    rating: 7.4,
    image: "https://www.nfbio.dk/sites/nfbio.dk/files/media-images/2025-09/gmnt-36b5e60d96-1529119-vst-68b6ee51afa34.jpeg",
  },
  {
    title: "Sinners",
    year: 2025,
    rating: 7.5,
    image: "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Oppenheimer",
    year: 2023,
    rating: 8.2,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/250px-Oppenheimer_%28film%29.jpg",
  },
  {
    title: "The Darjeeling Limited",
    year: 2007,
    rating: 7.2,
    image: "https://m.media-amazon.com/images/M/MV5BZDY4Mzc2YTQtZDg4ZS00OGIzLWJhOGMtOTQ2OThmNzg4NTc4XkEyXkFqcGc@._V1_.jpg",
  },
];

const movieList = document.querySelector("#movie-list");

/* showMovies() nulstiller listen og styrer hele flowet (loop gennem alle film) */
function showMovies() {
  movieList.innerHTML = "";

  for (const movie of movies) {
    showMovie(movie);
  }
}

/* showMovie(movie) renderer ét movie-card ad gangen */
function showMovie(movie) {
  const hightlightClass = movie.rating > 8.5 ? "movie-card--highlight" : "";
  
  const html = /* html */ `
    <article class="movie-card">
      <img class="movie-image" src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>År: ${movie.year}</p>
        <p>Rating: ${movie.rating}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}

movies.push({
  title: "Pulp Fiction",
  year: 1994,
  rating: 8.9,
  image: "https://img-cdn.sfanytime.com/COVERM/99a66254-3e74-4698-b9fb-9f81010f5574_COVERM_01.jpg?ar=0.692&fit=crop&fm=pjpg&w=415&s=3ad3ed97886ec9bbd7458d0bb74b25ce",
});

showMovies();