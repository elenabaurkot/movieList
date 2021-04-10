const axios = require("axios");
const router = require("express").Router();

// Search MovieDB API for movies based on what user searched in the frontend, return the results
router.get("/:movieName", (req, res) => {
  let movieName = req.params.movieName;

  let queryURL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&query=${movieName}`;

  axios.get(queryURL).then((response) => {
    let results = response.data.results;

    if (results.length === 0) {
      res.json({
        message: "No matching movies found, try searching another movie",
      });
    } else if (results != 0) {
      res.json(results);
    } else {
      res.status(500).json(err);
    }
  });
});

module.exports = router;
