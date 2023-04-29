let pokemon = require("./models/pokemon");
const express = require("express");
const jsxengine = require("jsx-view-engine").createEngine();
const app = express();
const PORT = process.env.PORT || 3000;

// View Engine Middleware Configure
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
// This line tells the render method the default file extension to look for.
app.set("view engine", "jsx");
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specific the views directory everytime we use the render method
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));

app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon });
});

app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

app.post("/pokemon/create", (req, res) => {
  console.log(req.body);
  pokemon.push({ ...req.body });
  res.redirect("/pokemon");
});

app.get("/pokemon/:id", (req, res) => {
  res.render("Show", { pokemon: pokemon[+req.params.id] });
});

app.get("/", (req, res) => res.send("Welcome to the Pokemon App!"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
