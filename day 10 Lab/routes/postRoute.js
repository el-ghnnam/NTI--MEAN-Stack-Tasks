const express = require("express");
const Post = require("../models/postDB");
const auth = require("../authMiddleware");
const router = express.Router();

// 1. CREATE post
router.post("/", auth, async (req, res) => {
  try {
    const { title, body } = req.body;
    const newPost = new Post({ title, body, userid: req.user.id });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: "Failed to create post" });
  }
});

// 2. GET all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("userid", "username email");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

// 3. GET post by ID
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: "Error fetching post" });
  }
});

// 4. Update Post (PUT - full update)
router.put("/:id", auth, async (req, res) => {
  try {
    const { title, body } = req.body;
    const updated = await Post.findByIdAndUpdate(
      req.params.id,
      { title, body },
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Post not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update post" });
  }
});

// 4.1 PATCH (update part of post)
router.patch("/:id", auth, async (req, res) => {
  try {
    const updated = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Post not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Patch failed" });
  }
});

// 5. DELETE post
router.delete("/:id", auth, async (req, res) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Post not found" });
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

module.exports = router;
