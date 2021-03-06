// Global Variables
const searchBtn = document.getElementById("submit-search-btn");
const movieInput = document.getElementById("movie-search-input");

// Function to append movie results to page
const appendMovies = (results) => {
  let movieDiv = document.getElementById("movie-div");
  console.log(results);
  if (results.message) {
    movieDiv.innerHTML = `<h4 class="text-center">${results.message}</h4>`;
  } else if (results.length != 0) {
    let movieHTML = "";
    results.forEach((movie) => {
      movieHTML += `<div class="movie-card card overflow-auto" style="width: 220px;">
      <img src= "https://image.tmdb.org/t/p/w200${movie.poster_path}" class="card-img-top" alt="${movie.title} cover image">
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <a href="#" class="btn btn-primary mb-1">Add to Watch List</a>
        <a href="#" class="btn btn-primary">Add to Favorites</a>
        <p class="card-text">${movie.overview}</p>
      </div>
    </div>`;
    });
    movieDiv.innerHTML = movieHTML;
  } else {
    console.log("error");
  }
};

// Function to retrieve user's movie results from API call on backend
const movieApiSearch = (movie) => {
  fetch(`/api/movies/${movie}`)
    .then((response) => response.json())
    .then((data) => appendMovies(data));
};

// Function to search for user's movie input on click of search button
const searchMovies = (event) => {
  event.preventDefault();
  console.log(event.target);

  let currentMovieInput = document.getElementById("movie-search-input").value;
  movieApiSearch(currentMovieInput);
};

// Event listeners
searchBtn.addEventListener("click", searchMovies);
// movieInput.addEventListener("keydown", searchMovies);
movieInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    searchMovies(event);
  }
});
