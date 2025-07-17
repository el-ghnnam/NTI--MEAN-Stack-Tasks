const Post = require("../models/Post");

async function verifyOwnership(req, res, next) {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  // Compare the post's userId to the authenticated user's id
  if (post.userId.toString() !== req.user.id) {
    return res
      .status(403)
      .json({ error: "You are not allowed to modify this post" });
  }

  next();
}

module.exports = verifyOwnership;
