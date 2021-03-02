const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", (req, res) => {
  res.send("we are posts");
});

router.get("/specific", (req, res) => {
  res.send("we are specific posts");
});

router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
