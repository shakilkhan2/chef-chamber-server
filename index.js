const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.Port || 5000;

const chefs = require("./data/chefs.json");

const recipes = require("./data/recipes.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("chefs' are cooking");
});

// chef data:
app.get("/chefs", (req, res) => {
  res.send(chefs);
});

// recipe data:
app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.listen(port, () => {
  console.log(`chef chamber API is running on port: ${port}`);
});
