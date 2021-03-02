const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("we are posts");
});

router.get("/specific", (req, res) => {
  res.send("we are specific posts");
});

module.exports = router;
