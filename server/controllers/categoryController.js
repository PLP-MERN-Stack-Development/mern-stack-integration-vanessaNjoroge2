const Category = require('../models/category');

exports.getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

exports.createCategory = async (req, res) => {
  const category = new Category(req.body);
  const saved = await category.save();
  res.status(201).json(saved);
};
