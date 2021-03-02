const express = require("express");

const app = express();

//Middleware - function that executes when routes are run
app.use("/posts", () => {
  console.log("This is middleware running");
});

//Routes
app.get("/", (req, res) => {
  res.send("we are home");
});

app.get("/posts", (req, res) => {
  res.send("we are posts");
});

//Boot up the server
app.listen(3000);
