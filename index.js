// http://www.omdbapi.com/?apikey=1989ac72&s=super
let movies;
const API_KEY = '1989ac72';
async function movieAPI(filter) {
   const searchTerm = searchInput.value.trim();
  const movieWrapper = document.querySelector(".movies");
  movieWrapper.classList += " movies__loading";
  if (!movies) {
    const web = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
    movies = await web.json();
  }
  movieWrapper.classList.remove("movies__loading");

  const web = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
  const movie = await web.json();

  if (filter === "LOW_TO_HIGH") {
    movie.Search.sort((a, b) => a.Title.localeCompare(b.Title));
  }
  if (filter === "HIGH_TO_LOW") {
    movie.Search.sort((a, b) => b.Title.localeCompare(a.Title));
  }
  if (filter === "YEAR--LOW") {
    movie.Search.sort((a, b) => a.Year.localeCompare(b.Year));
  }
  if (filter === "YEAR--HIGH") {
    movie.Search.sort((a, b) => b.Year.localeCompare(a.Year));
  }

  const movieList = document.querySelector(".user-list");
  const movieCard = await movie.Search;
  movieList.innerHTML = movieCard
    .map((movie) => {
      return `<div class="user-card">
            <div class="user-card__container">
                <h3>${movie.Title}</h3>
                <p><b>Year</b> ${movie.Year}</p>
                <p><b>imdbID</b> ${movie.imdbID}</p>
                <p><img src="${movie.Poster}"/></p>
            </div>
            </div>`;
    })
    .join("");
}

function movieFilter(event) {
  movieAPI(event.target.value);
}

setTimeout(() => {
  movieAPI();
});

function getMovie() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(movieAPI());
    }, 1000);
  });
}
getMovie();




/*
 SEARCH BAR


 */