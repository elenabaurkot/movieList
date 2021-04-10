// Global Variables
const searchBtn = document.getElementById("submit-search-btn");

// Function to append movie results to page
const appendMovies = (results) => {
  let movieDiv = document.getElementById("movie-div");
  console.log(results);
  if (results.message) {
    movieDiv.innerHTML = `<h4 class="mt-5 text-center">${results.message}</h4>`;
  } else if (results.length != 0) {
    let movieHTML = "";
    results.forEach((movie) => {
      movieHTML += `<div class="card m-2" style="width: 200px;">
      <img src= "https://image.tmdb.org/t/p/w200${movie.poster_path}" class="card-img-top" alt="${movie.title} cover image">
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">${movie.overview}</p>
        <a href="#" class="btn btn-primary mb-1">Add to Watch List</a>
        <a href="#" class="btn btn-primary">Add to Favorites</a>
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

  let movieInput = document.getElementById("movie-search-input").value;
  movieApiSearch(movieInput);
};

// Event listeners
searchBtn.addEventListener("click", searchMovies);
