const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("landing");
});

router.get("/search", (req, res) => {
  res.render("search");
});

module.exports = router;
