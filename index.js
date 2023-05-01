const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.Port || 5000;

const chefs = require("./data/chefs.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("chefs' are cooking");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.listen(port, () => {
  console.log(`chef chamber API is running on port: ${port}`);
});
