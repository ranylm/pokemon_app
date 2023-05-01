require("dotenv").config();
let Pokemon = require("./models/pokemon");
const express = require("express");
const jsxengine = require("jsx-view-engine").createEngine();
const app = express();
const PORT = process.env.PORT || 3000;

const { connect, connection } = require("mongoose");
//Database connection
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.once("open", (stream) => {
  console.log("connected to mongo");
});

// View Engine Middleware Configure
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
// This line tells the render method the default file extension to look for.
app.set("view engine", "jsx");
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specific the views directory everytime we use the render method
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));

app.get("/pokemon", async (req, res) => {
  try {
    const pokemon = await Pokemon.find({});
    res.render("Index", { pokemon });
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

app.post("/pokemon/create", async (req, res) => {
  try {
    await Pokemon.create(req.body);
    res.redirect("/pokemon");
  } catch (err) {
    res.send(400).send(err);
  }
});

app.get("/pokemon/:id", async (req, res) => {
  const data = await Pokemon.findById(req.params.id);
  res.render("Show", { pokemon: data });
});

app.get("/", (req, res) => res.send("Welcome to the Pokemon App!"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
