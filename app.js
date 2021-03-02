const express = require("express");

const app = express();

//Routes
app.get("/", (req, res) => {
  res.send("we are home");
});

//Boot up the server
app.listen(3000);
