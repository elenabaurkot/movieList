const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// Express middleware set up
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// Handlebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Tell server to listen
app.listen(PORT, () =>
  console.log(`App is listening on http://localhost:${PORT}`)
);
