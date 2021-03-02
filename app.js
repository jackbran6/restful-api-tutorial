const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

//Routes
app.get("/", (req, res) => {
  res.send("we are home");
});

app.get("/posts", (req, res) => {
  res.send("we are posts");
});

//Connect to DB
mongoose.connect(process.env.DB, { useNewUrlParser: true }, () =>
  console.log("Connected to Database")
);

//Boot up the server
app.listen(3000);
