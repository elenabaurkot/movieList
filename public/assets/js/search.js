// Global Variables
const searchBtn = document.getElementById("submit-search-btn");

// Function to append movie results to page
const appendMovies = (results) => {
  let movieDiv = document.getElementById("movie-div");

  if (results.message) {
    movieDiv.innerHTML = `<h4>${results.message}</h4>`;
  } else if (results.length != 0) {
    let movieHTML = "";
    results.forEach((movie) => {
      movieHTML += movie.title;
    });
    movieDiv.append(movieHTML);
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
