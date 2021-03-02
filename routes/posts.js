const express = require("express");
const { restart } = require("nodemon");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", (req, res) => {});

router.get("/specific", async (req, res) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch {
    res.json({ message: err });
  }
});

module.exports = router;
