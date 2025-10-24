const Post = require('../models/Post');

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate('category');
  res.json(posts);
};

exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
};

exports.createPost = async (req, res) => {
  const post = new Post(req.body);
  const saved = await post.save();
  res.status(201).json(saved);
};

exports.updatePost = async (req, res) => {
  const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post deleted' });
};
