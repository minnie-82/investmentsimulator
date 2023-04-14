const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });

const db = process.env.DATABASE;
const port = process.env.PORT;

mongoose
  .connect(db)
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/portfolio", (req, res) => {
  res.send("Welcome to portfolio");
});

app.get("/transaction", (req, res) => {
  res.send("Welcome to transaction");
});

app.get("/learn", (req, res) => {
  res.send("happy learning");
});

app.get("/login", (req, res) => {
  res.send("happy learning");
});

app.get("/register", (req, res) => {
  res.send("happy learning");
});

app.listen(3000, () => {
  console.log(`running on port ${port}`);
});
