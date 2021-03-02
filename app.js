const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();

//Import Routes
const postRoutes = require("./routes/posts");

app.use("/posts", postRoutes);

//Route
app.get("/", (req, res) => {
  res.send("we are home");
});

//Connect to DB
mongoose.connect(process.env.DB, { useNewUrlParser: true }, () =>
  console.log("Connected to Database")
);

//Boot up the server
app.listen(3000);
